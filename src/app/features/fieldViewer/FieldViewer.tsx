import { Grid, TextField } from '@mui/material';
import { FC, useEffect, useMemo, useState } from 'react';
import Spreadsheet, { CellBase, Matrix } from 'react-spreadsheet';

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
  FIELD_VIEW_SYMBOL;
  useEffect(() => {
    setFieldFilteringText('');
    setFilterdFields(fieldInformations);
  }, [fieldInformations]);

  const [fieldFilteringText, setFieldFilteringText] = useState('');
  const [filterdFields, setFilterdFields] = useState<Matrix<CellBase>>([]);

  const tooManyFields = filterdFields.length > LIMIT_DISPLAY;

  return (
    <>
      <Grid container spacing={1}>
        <Grid xs={2} className="p-2">
          <TextField
            label="項目絞り込み"
            value={fieldFilteringText}
            variant="standard"
            onChange={(event) => setFieldFilteringText(event.target.value)}
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
        </Grid>
        <Grid xs={10} className="p-2">
          {tooManyFields && (
            <div className="flex text-base">{`${LIMIT_DISPLAY}件以下となるように絞り込んでください`}</div>
          )}
        </Grid>
        <Grid
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
