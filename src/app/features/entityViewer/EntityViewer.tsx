import { FC, SyntheticEvent, useEffect, useMemo, useState } from 'react';
import Spreadsheet, {
  CellBase,
  EmptySelection,
  EntireRowsSelection,
  Matrix,
  Point,
  Selection,
} from 'react-spreadsheet';
import Grid from '@mui/material/Unstable_Grid2';
import { Autocomplete, Box, IconButton, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { ChromeStorage } from '../../../foundations/storages/ChromeStorage';
import { StorageKey } from '../../../foundations/storages/StorageKey';
import { FavoriteItem, compareFavoriteItem } from '../../../types/FavoriteItem';

const isEmptySelection = (selection: Selection): selection is EmptySelection => {
  return selection.equals(new EmptySelection());
};

const ENTITY_VIEW_SYMBOL = Symbol('EntityViewSymbol');

interface EntityViewerProps {
  objectInformations: Matrix<CellBase>;
  fieldInformationsByObject: { [key: string]: Matrix<CellBase> };
  onSelect?: (value: string) => void;
}

const OBJECT_COLUMNS = ['オブジェクト名', 'Api参照名'];
const FIELD_COLUMNS = ['項目名', 'Api参照名', '型', 'マスターラベル'];

export const EntityViewer: FC<EntityViewerProps> = ({
  objectInformations,
  fieldInformationsByObject,
  onSelect,
}) => {
  const [favoriteObjects, setFavoriteObjects] = useState<FavoriteItem[]>([]);
  const [favoriteFields, setFavoriteFields] = useState<FavoriteItem[]>([]);
  useEffect(() => {
    ChromeStorage.get([StorageKey.OBJECT_FAVORITE, StorageKey.FIELD_FAVORITE]).then((items) => {
      setFavoriteObjects((items[StorageKey.OBJECT_FAVORITE] ?? []) as FavoriteItem[]);
      setFavoriteFields((items[StorageKey.FIELD_FAVORITE] ?? []) as FavoriteItem[]);
    });
  }, [ENTITY_VIEW_SYMBOL]);
  useEffect(() => {
    setFieldFilteringText('');
    setDefaultObject();
  }, [objectInformations]);

  // オブジェクト側の操作
  const [objectFilteringText, setObjectFilteringText] = useState('');
  const [fieldFilteringText, setFieldFilteringText] = useState('');
  const objectOptions = useMemo(
    () => favoriteObjects.toSorted(compareFavoriteItem).map((object) => object.item),
    [favoriteObjects]
  );
  const isFavoriteObject = useMemo(
    () => favoriteObjects.some((field) => field.item === objectFilteringText),
    [objectFilteringText, favoriteObjects]
  );
  const filterdObjects = useMemo(() => {
    return objectInformations.filter((object) => {
      return object.some((o) => o?.value?.includes(objectFilteringText));
    });
  }, [objectInformations, objectFilteringText]);

  const [objectSelection, setObjectSelection] = useState<EntireRowsSelection | EmptySelection>(
    new EmptySelection()
  );
  const onChangeObjectFilteringText = (_: SyntheticEvent<Element, Event>, value: string | null) => {
    setFieldFilteringText('');
    setObjectFilteringText(value ?? '');
    // お気に入りが選択された場合は，最終使用日時を更新する
    const newFavoriteObjects = [...favoriteObjects];
    const favorite = newFavoriteObjects.find((object) => object.item === value);
    if (!favorite) {
      return;
    }

    favorite.lastUsed = new Date();
    setFavoriteObjects(newFavoriteObjects);
    ChromeStorage.set({ [StorageKey.OBJECT_FAVORITE]: newFavoriteObjects });
  };

  const onClickFavoriteObjectIcon = () => {
    const newFavoriteObject: FavoriteItem = {
      item: objectFilteringText,
      lastUsed: new Date(),
    };
    const newFavoriteObjects = isFavoriteObject
      ? favoriteObjects.filter((object) => object.item !== objectFilteringText)
      : [...favoriteObjects, newFavoriteObject];
    ChromeStorage.set({ [StorageKey.OBJECT_FAVORITE]: newFavoriteObjects });
    setFavoriteObjects(newFavoriteObjects);
  };

  const onSelectObject = (active: Point) => {
    const selection = new EntireRowsSelection(active.row, active.row);
    setObjectSelection(selection);
    onSelect?.(selectedObjectName(selection));
  };

  const setDefaultObject = () => {
    const selection =
      filterdObjects.length > 0 ? new EntireRowsSelection(0, 0) : new EmptySelection();
    setObjectSelection(selection);
    onSelect?.(selectedObjectName(selection));
  };

  const selectedObjectName = (objectSelection: EntireRowsSelection | EmptySelection) => {
    if (isEmptySelection(objectSelection)) {
      return '';
    }

    return filterdObjects[objectSelection.start]?.[1]?.value;
  };

  // 項目側の操作
  const fieldOptions = useMemo(
    () => favoriteFields.toSorted(compareFavoriteItem).map((field) => field.item),
    [favoriteFields]
  );
  const isFavoriteField = useMemo(() => {
    return favoriteFields.some((field) => field.item === fieldFilteringText);
  }, [fieldFilteringText, favoriteFields]);
  const filterdFields = useMemo(() => {
    const fields = fieldInformationsByObject[selectedObjectName(objectSelection)] ?? [];
    return fields.filter((field) => {
      return field.some((f) => f?.value?.includes(fieldFilteringText));
    });
  }, [fieldInformationsByObject, filterdObjects, objectSelection, fieldFilteringText]);

  const onChangeFieldFilteringText = (_: SyntheticEvent<Element, Event>, value: string | null) => {
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
  const onClickFieldFavoriteIcon = () => {
    const newFavoriteField: FavoriteItem = {
      item: fieldFilteringText,
      lastUsed: new Date(),
    };
    const newFavoriteFields = isFavoriteField
      ? favoriteFields.filter((field) => field.item !== fieldFilteringText)
      : [...favoriteFields, newFavoriteField];
    ChromeStorage.set({ [StorageKey.FIELD_FAVORITE]: newFavoriteFields });
    setFavoriteFields(newFavoriteFields);
  };
  return (
    <>
      <Grid container spacing={1}>
        <Grid xs={5} container>
          <Grid xs={11}>
            <Autocomplete
              freeSolo
              options={objectOptions}
              filterOptions={() => objectOptions}
              renderOption={(props, option) => (
                <Grid container justifyContent="space-between">
                  <Grid xs={11}>
                    <li {...props}>{option}</li>
                  </Grid>
                  <Grid>
                    <IconButton
                      size="small"
                      onClick={(e) => {
                        e.stopPropagation();
                        const newFavoriteObjects = favoriteObjects.filter(
                          (object) => object.item !== option
                        );
                        ChromeStorage.set({ [StorageKey.OBJECT_FAVORITE]: newFavoriteObjects });
                        setFavoriteObjects(newFavoriteObjects);
                      }}
                    >
                      <CloseIcon fontSize="small" />
                    </IconButton>
                  </Grid>
                </Grid>
              )}
              onChange={onChangeObjectFilteringText}
              onInputChange={onChangeObjectFilteringText}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="オブジェクト絞り込み"
                  value={objectFilteringText}
                  variant="standard"
                />
              )}
            />
          </Grid>
          <Grid xs>
            <IconButton
              disabled={!objectFilteringText}
              size="small"
              onClick={onClickFavoriteObjectIcon}
            >
              {isFavoriteObject ? <StarIcon /> : <StarBorderIcon />}
            </IconButton>
          </Grid>
          <Grid
            xs={12}
            style={{
              maxWidth: '100%',
              width: 'fit-content',
              height: `calc(100vh - 200px)`,
              overflow: 'auto',
            }}
          >
            <Spreadsheet
              data={filterdObjects}
              columnLabels={OBJECT_COLUMNS}
              selected={objectSelection}
              onActivate={onSelectObject}
            />
          </Grid>
        </Grid>

        <Grid xs={7} container>
          <Grid xs={11}>
            <Autocomplete
              freeSolo
              options={fieldOptions}
              filterOptions={() => fieldOptions}
              renderOption={(props, option) => (
                <Grid container justifyContent="space-between">
                  <Grid xs={11}>
                    <li {...props}>{option}</li>
                  </Grid>
                  <Grid>
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
              onChange={onChangeFieldFilteringText}
              onInputChange={onChangeFieldFilteringText}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="項目絞り込み"
                  value={fieldFilteringText}
                  variant="standard"
                />
              )}
            />
          </Grid>
          <Grid xs>
            <IconButton
              disabled={!fieldFilteringText}
              size="small"
              onClick={onClickFieldFavoriteIcon}
            >
              {isFavoriteField ? <StarIcon /> : <StarBorderIcon />}
            </IconButton>
          </Grid>
          <Grid
            xs={12}
            style={{
              maxWidth: '100%',
              width: 'fit-content',
              height: `calc(100vh - 200px)`,
              overflow: 'auto',
            }}
          >
            <Spreadsheet data={filterdFields} columnLabels={FIELD_COLUMNS} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
