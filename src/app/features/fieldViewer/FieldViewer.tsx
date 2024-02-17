import { Grid, TextField, Autocomplete, IconButton } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { FC, useEffect, useMemo, useState } from 'react';
import Spreadsheet, { CellBase, Matrix } from 'react-spreadsheet';
import { StorageKey } from '../../../foundations/storages/StorageKey';
import { ChromeStorage } from '../../../foundations/storages/ChromeStorage';
import { FavoriteItem } from '../../../types/FavoriteItem';

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

  const fieldOptions = useMemo(() => favoriteFields.map((field) => field.item), [favoriteFields]);
  const isFavorite = useMemo(
    () => favoriteFields.some((field) => field.item === fieldFilteringText),
    [fieldFilteringText, favoriteFields]
  );

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
              onChange={(_, value) => setFieldFilteringText(value ?? '')}
              onInputChange={(_, value) => setFieldFilteringText(value)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="項目絞り込み"
                  value={fieldFilteringText}
                  variant="standard"
                  onBlur={() => {
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
                  }}
                />
              )}
            />
          </Grid>
          <Grid item xs={2}>
            <IconButton
              disabled={!fieldFilteringText}
              size="small"
              onClick={() => {
                const newFavoriteField: FavoriteItem = {
                  item: fieldFilteringText,
                  lastUsed: new Date(),
                };
                const newFavoriteFields = isFavorite
                  ? favoriteFields.filter((field) => field.item !== fieldFilteringText)
                  : [...favoriteFields, newFavoriteField];
                ChromeStorage.set({ [StorageKey.FIELD_FAVORITE]: newFavoriteFields });
                setFavoriteFields(newFavoriteFields);
              }}
            >
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
