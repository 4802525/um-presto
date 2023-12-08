import { Grid, TextField } from '@mui/material';
import { FC, useEffect, useMemo, useState } from 'react';
import Spreadsheet, { CellBase, Matrix } from 'react-spreadsheet';

const FIELD_VIEW_SYMBOL = Symbol('FieldViewSymbol');

interface FieldViewerProps {
  fieldInformations: Matrix<CellBase>;
}

const COLUMNS = ['オブジェクト名', 'Api参照名(オブジェクト)', '項目名', 'Api参照名(項目)', '型'];

export const FieldViewer: FC<FieldViewerProps> = ({ fieldInformations }) => {
  FIELD_VIEW_SYMBOL;
  useEffect(() => {
    setFieldFilteringText('');
  }, [fieldInformations]);

  const [fieldFilteringText, setFieldFilteringText] = useState('');
  const filterdFields = useMemo(() => {
    return fieldInformations.filter((field) => {
      return field.some((c) => c?.value.includes(fieldFilteringText));
    });
  }, [fieldInformations, fieldFilteringText]);

  return (
    <>
      <Grid container spacing={1}>
        <Grid xs={12} className="p-2">
          <TextField
            label="項目絞り込み"
            value={fieldFilteringText}
            variant="standard"
            onChange={(event) => setFieldFilteringText(event.target.value)}
          />
        </Grid>
        <Grid xs={12} style={{ height: 500, overflow: 'auto' }}>
          <Spreadsheet data={filterdFields} columnLabels={COLUMNS} />
        </Grid>
      </Grid>
    </>
  );
};
