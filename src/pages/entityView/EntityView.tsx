import { useEffect, useMemo, useRef, useState } from 'react';
import { EntityViewer } from '../../app/features/entityViewer/EntityViewer';
import { SfConnection } from '../../foundations/sfConnections';
import { EntityDefinition } from '../../generated';
import { CellBase, Matrix } from 'react-spreadsheet';
import { Box, Checkbox, FormControlLabel, Grid, IconButton, Tab, Tabs } from '@mui/material';
import ViewSidebarRoundedIcon from '@mui/icons-material/ViewSidebarRounded';
import SecurityRoundedIcon from '@mui/icons-material/SecurityRounded';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FieldViewer } from '../../app/features/fieldViewer';

const ENTITY_VIEW_SYMBOLE = Symbol('EntityView');
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const EntityView = () => {
  useEffect(() => {
    const sfConn = new SfConnection();
    const args = new URLSearchParams(location.search.slice(1));
    const sfHost = args.get('host');
    if (!sfHost) {
      return;
    }

    sfConn.getSession(sfHost).then(() => {
      setSfConnection(sfConn);
    });
  }, [ENTITY_VIEW_SYMBOLE]);

  // salesforce
  const [sfConnection, setSfConnection] = useState<SfConnection | undefined>(undefined);

  // Entity
  const [entityDefinitions, setEntityDefinitions] = useState<EntityDefinition[]>([]);
  // Action
  const [selectedObjectApiName, setSeletedObjectApiName] = useState<string>('');
  const [onlyUm, setOnlyUm] = useState<boolean>(true);
  const [objectInformations, fieldInformationsByObject, fieldInformations] = useMemo(() => {
    const entityDefs = entityDefinitions.filter(
      (entity) =>
        !onlyUm ||
        entity?.qualifiedApiName?.includes('snps_um') ||
        entity?.qualifiedApiName === 'Account'
    );
    const objectInfos = entityDefs.map((entity) => [
      { value: entity.label, readOnly: true },
      { value: entity.qualifiedApiName, readOnly: true },
    ]);

    const fieldInfosBuilder = new Map<string, Matrix<CellBase>>();
    for (const entity of entityDefs) {
      if (!entity.qualifiedApiName) {
        continue;
      }

      fieldInfosBuilder.set(
        entity.qualifiedApiName,
        entity.fields
          ?.filter(
            (field) =>
              !onlyUm ||
              field?.qualifiedApiName?.includes('snps_um') ||
              field?.qualifiedApiName === 'Id' ||
              field?.qualifiedApiName === 'Name'
          )
          .map((field) => [
            { value: field.label, readOnly: true },
            { value: field.qualifiedApiName, readOnly: true },
            { value: field.dataType, readOnly: true },
          ]) ?? []
      );
    }

    const fieldInfos = entityDefs.flatMap((entity) => {
      return (
        entity.fields
          ?.filter(
            (field) =>
              !onlyUm ||
              field?.qualifiedApiName?.includes('snps_um') ||
              field?.qualifiedApiName === 'Id' ||
              field?.qualifiedApiName === 'Name'
          )
          .map((field) => [
            { value: entity.label, readOnly: true },
            { value: entity.qualifiedApiName, readOnly: true },
            { value: field.label, readOnly: true },
            { value: field.qualifiedApiName, readOnly: true },
            { value: field.dataType, readOnly: true },
          ]) ?? []
      );
    });

    return [objectInfos, Object.fromEntries(fieldInfosBuilder), fieldInfos];
  }, [entityDefinitions, onlyUm]);

  // tab
  const [tab, setTab] = useState<number>(0);

  useEffect(() => {
    if (!sfConnection) {
      return;
    }

    EntityDefinition.retrieve((f) => ({
      select: [
        ...f.select('id', 'qualifiedApiName', 'label'),
        f.subQuery('fields', (subF) => ({
          select: subF.select('id', 'qualifiedApiName', 'label', 'dataType'),
        })),
      ],
      where: [
        // 不要なオブジェクトを除去
        [{ field: f.select('qualifiedApiName'), val: '%Share', op: 'LIKE', not: true }],
        [{ field: f.select('qualifiedApiName'), val: '%Feed', op: 'LIKE', not: true }],
        [{ field: f.select('qualifiedApiName'), val: '%ChangeEvent', op: 'LIKE', not: true }],
        [{ field: f.select('qualifiedApiName'), val: '%History', op: 'LIKE', not: true }],
      ],
      orderBy: [{ field: f.select('label') }],
    })).then((entities) => {
      setEntityDefinitions(entities);
    });
  }, [sfConnection]);

  // object action
  const [showPermissionSetMenu, setShowPermissionSetMenu] = useState<boolean>(false);
  const permissionSetIconRef = useRef(null);

  if (!sfConnection) {
    return <div>domainが有効ではありません．</div>;
  }

  return (
    <div className="h-screen w-screen">
      <Grid container className="p-2">
        <Grid xs={12}>
          <div className="flex justify-center mt-2 text-base">Entity Viewer</div>
        </Grid>

        <Grid xs={12}>
          <IconButton color="primary" disabled={!selectedObjectApiName} size="large">
            <ViewSidebarRoundedIcon />
          </IconButton>

          <IconButton
            id="permission-set-icon"
            color="primary"
            disabled={!selectedObjectApiName}
            size="large"
            aria-controls="permission-set-menu"
            aria-haspopup="true"
            aria-expanded={showPermissionSetMenu}
            ref={permissionSetIconRef}
            onClick={() => {
              setShowPermissionSetMenu(true);
            }}
          >
            <SecurityRoundedIcon />
          </IconButton>

          <Menu
            id="permission-set-menu"
            open={showPermissionSetMenu}
            anchorEl={permissionSetIconRef.current}
            MenuListProps={{
              'aria-labelledby': 'permission-set-icon',
            }}
            onClose={() => {
              setShowPermissionSetMenu(false);
            }}
          >
            <MenuItem
              onClick={() => {
                setShowPermissionSetMenu(false);
              }}
            >
              Product Admin
            </MenuItem>
            <MenuItem
              onClick={() => {
                setShowPermissionSetMenu(false);
              }}
            >
              Scm Admin
            </MenuItem>
            <MenuItem
              onClick={() => {
                setShowPermissionSetMenu(false);
              }}
            >
              Wms Admin
            </MenuItem>
          </Menu>

          <FormControlLabel
            control={<Checkbox checked={onlyUm} onChange={() => setOnlyUm(!onlyUm)} />}
            disabled={tab === 1}
            label="UMのみ"
          />
        </Grid>

        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={tab}
            onChange={(_, value) => {
              setSeletedObjectApiName('');
              setOnlyUm(true);
              setTab(value);
            }}
            aria-label="tab"
          >
            <Tab label="オブジェクト" {...a11yProps(0)} />
            <Tab label="項目" {...a11yProps(1)} />
          </Tabs>
        </Box>

        <Grid xs={12}>
          {tab === 0 && (
            <EntityViewer
              objectInformations={objectInformations}
              fieldInformationsByObject={fieldInformationsByObject}
              onSelect={(objectApiName: string) => {
                setSeletedObjectApiName(objectApiName);
              }}
            />
          )}
          {tab === 1 && <FieldViewer fieldInformations={fieldInformations} />}
        </Grid>
      </Grid>
    </div>
  );
};

export default EntityView;
