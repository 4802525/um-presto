import { FC, useEffect, useMemo, useState } from 'react';
import Spreadsheet, {
  CellBase,
  EmptySelection,
  EntireRowsSelection,
  Matrix,
  Point,
  Selection,
} from 'react-spreadsheet';
import Grid from '@mui/material/Unstable_Grid2';
import { ChromeStorage, StorageKey } from '../../../foundations/storages';
import { FavoriteItem } from '../../../types/FavoriteItem';
import { FavoriteAutoComplete } from '../../../foundations/favoriteAutoComplete';

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
  const filterdObjects = useMemo(() => {
    return objectInformations.filter((object) => {
      return object.some((o) => o?.value?.includes(objectFilteringText));
    });
  }, [objectInformations, objectFilteringText]);

  const [objectSelection, setObjectSelection] = useState<EntireRowsSelection | EmptySelection>(
    new EmptySelection()
  );
  const onChangeObjectFilteringText = (value: string) => {
    setObjectFilteringText(value);
    // お気に入りが選択された場合は，最終使用日時を更新する
    const newFavoriteObjects = [...favoriteObjects];
    const favorite = newFavoriteObjects.find((object) => object.item === value);
    if (!favorite) {
      return;
    }

    favorite.lastUsed = new Date().getTime();
    setFavoriteObjects(newFavoriteObjects);
    ChromeStorage.set({ [StorageKey.OBJECT_FAVORITE]: newFavoriteObjects });
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
  const onChangeFieldFilteringText = (value: string) => {
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
  const filterdFields = useMemo(() => {
    const fields = fieldInformationsByObject[selectedObjectName(objectSelection)] ?? [];
    return fields.filter((field) => {
      return field.some((f) => f?.value?.includes(fieldFilteringText));
    });
  }, [fieldInformationsByObject, filterdObjects, objectSelection, fieldFilteringText]);

  return (
    <>
      <Grid container spacing={1}>
        <Grid xs={5} container alignItems="center">
          <Grid xs={12}>
            <FavoriteAutoComplete
              label="オブジェクト絞り込み"
              value={objectFilteringText}
              favoriteItems={favoriteObjects}
              setFavoriteItems={(favoriteItems) => {
                ChromeStorage.set({ [StorageKey.OBJECT_FAVORITE]: favoriteItems });
                setFavoriteObjects(favoriteItems);
              }}
              onChange={onChangeObjectFilteringText}
            />
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

        <Grid xs={7} container alignItems="center">
          <Grid xs={12}>
            <FavoriteAutoComplete
              label="項目絞り込み"
              value={fieldFilteringText}
              favoriteItems={favoriteFields}
              setFavoriteItems={(favoriteItems) => {
                ChromeStorage.set({ [StorageKey.FIELD_FAVORITE]: favoriteItems });
                setFavoriteFields(favoriteItems);
              }}
              onChange={onChangeFieldFilteringText}
            />
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
