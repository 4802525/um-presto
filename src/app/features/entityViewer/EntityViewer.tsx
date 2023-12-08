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
import { TextField } from '@mui/material';

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
const FIELD_COLUMNS = ['項目名', 'Api参照名', '型'];

export const EntityViewer: FC<EntityViewerProps> = ({
  objectInformations,
  fieldInformationsByObject,
  onSelect,
}) => {
  ENTITY_VIEW_SYMBOL;
  useEffect(() => {
    setFieldFilteringText('');
    setDefaultObject();
  }, [objectInformations]);

  // オブジェクト側の操作
  const [objectFilteringText, setObjectFilteringText] = useState('');
  const [fieldFilteringText, setFieldFilteringText] = useState('');

  const filterdObjects = useMemo(() => {
    return objectInformations.filter((object) => {
      return object.some((o) => o?.value.includes(objectFilteringText));
    });
  }, [objectInformations, objectFilteringText]);

  const [objectSelection, setObjectSelection] = useState<EntireRowsSelection | EmptySelection>(
    new EmptySelection()
  );
  function onSelectObject(active: Point) {
    setObjectSelection(new EntireRowsSelection(active.row, active.row));
    onSelect?.(selectedObjectName(objectSelection));
  }

  function setDefaultObject() {
    const selection =
      filterdObjects.length > 0 ? new EntireRowsSelection(0, 0) : new EmptySelection();
    setObjectSelection(selection);
    onSelect?.(selectedObjectName(objectSelection));
  }

  function selectedObjectName(objectSelection: EntireRowsSelection | EmptySelection) {
    if (isEmptySelection(objectSelection)) {
      return '';
    }

    return filterdObjects[objectSelection.start]?.[1]?.value;
  }

  // 項目側の操作
  const filterdFields = useMemo(() => {
    const fields = fieldInformationsByObject[selectedObjectName(objectSelection)] ?? [];
    return fields.filter((field) => {
      return field.some((f) => f?.value.includes(fieldFilteringText));
    });
  }, [fieldInformationsByObject, filterdObjects, objectSelection, fieldFilteringText]);

  return (
    <>
      <Grid container spacing={1}>
        <Grid xs={4}>
          <Grid xs={12}>
            <TextField
              label="オブジェクト絞り込み"
              value={objectFilteringText}
              variant="standard"
              onChange={(event) => {
                setFieldFilteringText('');
                setObjectFilteringText(event.target.value);
              }}
            />
          </Grid>
          <Grid xs={12} style={{ height: 500, overflow: 'auto' }}>
            <Spreadsheet
              data={filterdObjects}
              columnLabels={OBJECT_COLUMNS}
              selected={objectSelection}
              onActivate={onSelectObject}
            />
          </Grid>
        </Grid>

        <Grid xs={8}>
          <Grid xs={12} className="p-2">
            <TextField
              label="項目絞り込み"
              value={fieldFilteringText}
              variant="standard"
              onChange={(event) => setFieldFilteringText(event.target.value)}
            />
          </Grid>
          <Grid xs={12} style={{ height: 500, overflow: 'auto' }}>
            <Spreadsheet data={filterdFields} columnLabels={FIELD_COLUMNS} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
