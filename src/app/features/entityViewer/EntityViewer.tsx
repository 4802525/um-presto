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
const OBJECT_INFOS_MOCK = [
  [
    { value: 'snps_um__Item__c', readOnly: true },
    { value: '品目', readOnly: true },
  ],
  [
    { value: 'snps_um__Unit__c', readOnly: true },
    { value: '単位', readOnly: true },
  ],
  [
    { value: 'snps_um__ItemUnit__c', readOnly: true },
    { value: '品目単位', readOnly: true },
  ],
  [
    { value: 'snps_um__Unit__c', readOnly: true },
    { value: '単位', readOnly: true },
  ],
  [
    { value: 'snps_um__Unit__c', readOnly: true },
    { value: '単位', readOnly: true },
  ],
  [
    { value: 'snps_um__Unit__c', readOnly: true },
    { value: '単位', readOnly: true },
  ],
  [
    { value: 'snps_um__Unit__c', readOnly: true },
    { value: '単位', readOnly: true },
  ],
  [
    { value: 'snps_um__Unit__c', readOnly: true },
    { value: '単位', readOnly: true },
  ],
  [
    { value: 'snps_um__Unit__c', readOnly: true },
    { value: '単位', readOnly: true },
  ],
  [
    { value: 'snps_um__Unit__c', readOnly: true },
    { value: '単位', readOnly: true },
  ],
  [
    { value: 'snps_um__Unit__c', readOnly: true },
    { value: '単位', readOnly: true },
  ],
  [
    { value: 'snps_um__Unit__c', readOnly: true },
    { value: '単位', readOnly: true },
  ],
  [
    { value: 'snps_um__Unit__c', readOnly: true },
    { value: '単位', readOnly: true },
  ],
  [
    { value: 'snps_um__Unit__c', readOnly: true },
    { value: '単位', readOnly: true },
  ],
  [
    { value: 'snps_um__Unit__c', readOnly: true },
    { value: '単位', readOnly: true },
  ],
  [
    { value: 'snps_um__Unit__c', readOnly: true },
    { value: '単位', readOnly: true },
  ],
  [
    { value: 'snps_um__Unit__c', readOnly: true },
    { value: '単位', readOnly: true },
  ],
  [
    { value: 'snps_um__Unit__c', readOnly: true },
    { value: '単位', readOnly: true },
  ],
  [
    { value: 'snps_um__Unit__c', readOnly: true },
    { value: '単位', readOnly: true },
  ],
  [
    { value: 'snps_um__Unit__c', readOnly: true },
    { value: '単位', readOnly: true },
  ],
  [
    { value: 'snps_um__Unit__c', readOnly: true },
    { value: '単位', readOnly: true },
  ],
  [
    { value: 'snps_um__Unit__c', readOnly: true },
    { value: '単位', readOnly: true },
  ],
  [
    { value: 'snps_um__Unit__c', readOnly: true },
    { value: '単位', readOnly: true },
  ],
  [
    { value: 'snps_um__Unit__c', readOnly: true },
    { value: '単位', readOnly: true },
  ],
  [
    { value: 'snps_um__Unit__c', readOnly: true },
    { value: '単位', readOnly: true },
  ],
  [
    { value: 'snps_um__Unit__c', readOnly: true },
    { value: '単位', readOnly: true },
  ],
  [
    { value: 'snps_um__Unit__c', readOnly: true },
    { value: '単位', readOnly: true },
  ],
  [
    { value: 'snps_um__Unit__c', readOnly: true },
    { value: '単位', readOnly: true },
  ],
  [
    { value: 'snps_um__Unit__c', readOnly: true },
    { value: '単位', readOnly: true },
  ],
  [
    { value: 'snps_um__Unit__c', readOnly: true },
    { value: '単位', readOnly: true },
  ],
  [
    { value: 'snps_um__Unit__c', readOnly: true },
    { value: '単位', readOnly: true },
  ],
  [
    { value: 'snps_um__Unit__c', readOnly: true },
    { value: '単位', readOnly: true },
  ],
  [
    { value: 'snps_um__Unit__c', readOnly: true },
    { value: '単位', readOnly: true },
  ],
  [
    { value: 'snps_um__Unit__c', readOnly: true },
    { value: '単位', readOnly: true },
  ],
  [
    { value: 'snps_um__Unit__c', readOnly: true },
    { value: '単位', readOnly: true },
  ],
  [
    { value: 'snps_um__Unit__c', readOnly: true },
    { value: '単位', readOnly: true },
  ],
  [
    { value: 'snps_um__Unit__c', readOnly: true },
    { value: '単位', readOnly: true },
  ],
];
const FIELD_INFOS_BY_OBJECT_MOCK = {
  snps_um__Item__c: [
    [
      { value: 'Name', readOnly: true },
      { value: '品目', readOnly: true },
    ],
    [
      { value: 'snps_um__ItemDiv__c', readOnly: true },
      { value: '品目区分', readOnly: true },
    ],
  ],
  snps_um__Unit__c: [
    [
      { value: 'Name', readOnly: true },
      { value: '単位', readOnly: true },
    ],
  ],
  snps_um__ItemUnit__c: [
    [
      { value: 'Name', readOnly: true },
      { value: '品目単位', readOnly: true },
    ],
  ],
};

const OBJECT_COLUMNS = ['Api参照名', 'オブジェクト名'];
const FIELD_COLUMNS = ['Api参照名', '項目名'];

export const EntityViewer: FC = () => {
  // #region data定義
  const [objectInformations, setObjectInformations] = useState<Matrix<CellBase>>([]);

  const [fieldInformationsByObject, setFieldInformationsByObject] = useState<{
    [key: string]: Matrix<CellBase>;
  }>({});
  // #endregion data定義

  // 初期化
  useEffect(() => {
    setObjectInformations(OBJECT_INFOS_MOCK);
    setFieldInformationsByObject(FIELD_INFOS_BY_OBJECT_MOCK);
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
      return object.some((o) => o?.value.includes(objectFilteringText));
    });
  }, [objectInformations, objectFilteringText]);

  const [objectSelection, setObjectSelection] = useState<EntireRowsSelection | EmptySelection>(
    new EmptySelection()
  );
  function onSelectObject(active: Point) {
    setObjectSelection(new EntireRowsSelection(active.row, active.row));
  }

  function setDefaultObject() {
    const selection =
      filterdObjects.length > 0 ? new EntireRowsSelection(0, 0) : new EmptySelection();
    setObjectSelection(selection);
  }

  function selectedObjectName(objectSelection: EntireRowsSelection | EmptySelection) {
    if (isEmptySelection(objectSelection)) {
      return '';
    }

    return filterdObjects[objectSelection.start]?.[0]?.value;
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
      <Grid container rowSpacing={1} columnSpacing={1}>
        <Grid xs={12}>
          <div className="flex justify-center mt-2 text-base">Entity Viewer</div>
        </Grid>
        <Grid xs={3}>
          <Grid xs={11} xsOffset={1}>
            <TextField
              label="オブジェクト絞り込み"
              value={objectFilteringText}
              onChange={(event) => {
                setFieldFilteringText('');
                setObjectFilteringText(event.target.value);
              }}
              onBlur={() => {
                setDefaultObject();
              }}
              variant="standard"
            />
          </Grid>
          <Grid xs={12} style={{ maxHeight: 600, overflow: 'auto' }}>
            <Spreadsheet
              data={filterdObjects}
              columnLabels={OBJECT_COLUMNS}
              selected={objectSelection}
              onActivate={onSelectObject}
            />
          </Grid>
        </Grid>

        <Grid xs={9}>
          <Grid xs={11} xsOffset={1}>
            <TextField
              label="項目絞り込み"
              value={fieldFilteringText}
              onChange={(event) => setFieldFilteringText(event.target.value)}
              variant="standard"
            />
          </Grid>
          <Grid xs={12} style={{ maxHeight: 600, overflow: 'auto' }}>
            <Spreadsheet data={filterdFields} columnLabels={FIELD_COLUMNS} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
