import { Grid } from '@mui/material';
import { FC, useEffect, useMemo, useState } from 'react';
import Spreadsheet, { CellBase, Matrix } from 'react-spreadsheet';
import { ChromeStorage, StorageKey } from '../../../foundations/storages';
import { FavoriteItem } from '../../../types/FavoriteItem';
import { FavoriteAutoComplete } from '../../../foundations/favoriteAutoComplete';

const FIELD_VIEW_SYMBOL = Symbol('FieldViewSymbol');

interface FieldViewerProps {
  fieldInformations: Matrix<CellBase>;
}

// 1000件を超える場合は表示のレスポンスに影響する
const LIMIT_DISPLAY = 1000;

const OBJECT_COLUMN_SIZE = 2;
const COLUMNS = [
  'オブジェクト名',
  'Api参照名(オブジェクト)',
  '項目名',
  'Api参照名(項目)',
  '型',
  'マスターラベル',
];

export const FieldViewer: FC<FieldViewerProps> = ({ fieldInformations }) => {
  const [favoriteFields, setFavoriteFields] = useState<FavoriteItem[]>([]);
  useEffect(() => {
    ChromeStorage.get(StorageKey.FIELD_FAVORITE).then((items) => {
      console.log(favoriteFields);
      setFavoriteFields((items[StorageKey.FIELD_FAVORITE] ?? []) as FavoriteItem[]);
    });
  }, [FIELD_VIEW_SYMBOL]);
  useEffect(() => {
    setFilterdFields(
      fieldInformations.filter((field) => {
        // 項目の情報だけ絞り込む
        return field.some((c, index) => {
          if (index < OBJECT_COLUMN_SIZE) {
            return false;
          }

          return c?.value?.includes(fieldFilteringText);
        });
      })
    );
  }, [fieldInformations]);

  const [fieldFilteringText, setFieldFilteringText] = useState('');
  const [filterdFields, setFilterdFields] = useState<Matrix<CellBase>>([]);

  const onChangeFilteringText = (value: string) => {
    setFieldFilteringText(value);
    // お気に入りが選択された場合は，最終使用日時を更新する
    const newFavoriteFields = [...favoriteFields];
    const favorite = newFavoriteFields.find((field) => field.item === value);
    if (!favorite) {
      return;
    }

    favorite.lastUsed = new Date().getTime();
    setFavoriteFields(newFavoriteFields);
    ChromeStorage.set({ [StorageKey.FIELD_FAVORITE]: newFavoriteFields });
  };
  const onBlurFilteringText = () => {
    setFilterdFields(
      fieldInformations.filter((field) => {
        // 項目の情報だけ絞り込む
        return field.some((c, index) => {
          if (index < OBJECT_COLUMN_SIZE) {
            return false;
          }

          return c?.value?.includes(fieldFilteringText);
        });
      })
    );
  };

  const tooManyFields = useMemo(() => filterdFields.length > LIMIT_DISPLAY, [filterdFields]);

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <FavoriteAutoComplete
            label="項目絞り込み"
            value={fieldFilteringText}
            favoriteItems={favoriteFields}
            setFavoriteItems={(favoriteItems) => {
              ChromeStorage.set({ [StorageKey.FIELD_FAVORITE]: favoriteItems });
              setFavoriteFields(favoriteItems);
            }}
            onChange={onChangeFilteringText}
            onBlur={onBlurFilteringText}
          />
        </Grid>

        <Grid item xs={6}>
          {tooManyFields && (
            <div className="flex text-base">{`${LIMIT_DISPLAY}件以下となるように絞り込んでください`}</div>
          )}
        </Grid>
        <Grid
          item
          style={{
            maxWidth: '100%',
            width: 'fit-content',
            height: `calc(100vh - 200px)`,
            overflow: 'auto',
          }}
        >
          <Spreadsheet data={tooManyFields ? [] : filterdFields} columnLabels={COLUMNS} />
        </Grid>
      </Grid>
    </>
  );
};
