import { Grid, TextField, Autocomplete, IconButton, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { FC, SyntheticEvent, useEffect, useMemo, useState } from 'react';
import Spreadsheet, { CellBase, Matrix } from 'react-spreadsheet';
import { StorageKey } from '../../../foundations/storages/StorageKey';
import { ChromeStorage } from '../../../foundations/storages/ChromeStorage';
import { FavoriteItem, compareFavoriteItem } from '../../../types/FavoriteItem';

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
    setFieldFilteringText('');
    setFilterdFields(fieldInformations);
  }, [fieldInformations]);

  const [fieldFilteringText, setFieldFilteringText] = useState('');
  const [filterdFields, setFilterdFields] = useState<Matrix<CellBase>>([]);

  const fieldOptions = useMemo(
    () => favoriteFields.toSorted(compareFavoriteItem).map((field) => field.item),
    [favoriteFields]
  );
  const isFavorite = useMemo(
    () => favoriteFields.some((field) => field.item === fieldFilteringText),
    [fieldFilteringText, favoriteFields]
  );

  const onChangeFilteringText = (_: SyntheticEvent<Element, Event>, value: string | null) => {
    setFieldFilteringText(value ?? '');
    // お気に入りが選択された場合は，最終使用日時を更新する
    const newFavoriteFields = [...favoriteFields];
    const favorite = newFavoriteFields.find((field) => field.item === value);
    if (!favorite) {
      return;
    }

    favorite.lastUsed = new Date();
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

  const onClickFavoriteIcon = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    const newFavoriteField: FavoriteItem = {
      item: fieldFilteringText,
      lastUsed: new Date(),
    };
    const newFavoriteFields = isFavorite
      ? favoriteFields.filter((field) => field.item !== fieldFilteringText)
      : [...favoriteFields, newFavoriteField];
    ChromeStorage.set({ [StorageKey.FIELD_FAVORITE]: newFavoriteFields });
    setFavoriteFields(newFavoriteFields);
  };

  const tooManyFields = filterdFields.length > LIMIT_DISPLAY;

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={6} container>
          <Grid item xs={10}>
            <Autocomplete
              freeSolo
              options={fieldOptions}
              filterOptions={() => fieldOptions}
              renderOption={(props, option) => (
                <Grid container justifyContent="space-between">
                  <Grid item xs={11}>
                    <li {...props}>{option}</li>
                  </Grid>
                  <Grid item>
                    <IconButton
                      size="small"
                      onClick={(e) => {
                        e.stopPropagation();
                        const newFavoriteFields = favoriteFields.filter(
                          (field) => field.item !== option
                        );
                        ChromeStorage.set({ [StorageKey.FIELD_FAVORITE]: newFavoriteFields });
                        setFavoriteFields(newFavoriteFields);
                      }}
                    >
                      <CloseIcon fontSize="small" />
                    </IconButton>
                  </Grid>
                </Grid>
              )}
              onChange={onChangeFilteringText}
              onInputChange={onChangeFilteringText}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="項目絞り込み"
                  value={fieldFilteringText}
                  variant="standard"
                  onBlur={onBlurFilteringText}
                />
              )}
            />
          </Grid>
          <Grid item xs={2}>
            <IconButton disabled={!fieldFilteringText} size="small" onClick={onClickFavoriteIcon}>
              {isFavorite ? <StarIcon /> : <StarBorderIcon />}
            </IconButton>
          </Grid>
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
            height: `calc(100vh - 150px)`,
            overflow: 'auto',
          }}
        >
          <Spreadsheet data={tooManyFields ? [] : filterdFields} columnLabels={COLUMNS} />
        </Grid>
      </Grid>
    </>
  );
};
