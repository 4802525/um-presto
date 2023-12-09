import { useEffect, useRef, useState } from 'react';
import { EntityViewer } from '../../app/features/entityViewer/EntityViewer';
import { SfConnection } from '../../foundations/sfConnections';
import { EntityDefinition } from '../../generated';
import { CellBase, Matrix } from 'react-spreadsheet';
import { Grid, IconButton } from '@mui/material';
import ViewSidebarRoundedIcon from '@mui/icons-material/ViewSidebarRounded';
import SecurityRoundedIcon from '@mui/icons-material/SecurityRounded';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const ENTITY_VIEW_SYMBOLE = Symbol('EntityView');
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

  // EntityView
  const [objectInformations, setObjectInfomations] = useState<Matrix<CellBase>>([]);
  const [fieldInformationsByObject, setFieldInformationsByObject] = useState<{
    [key: string]: Matrix<CellBase>;
  }>({});
  const [selectedObjectApiName, setSeletedObjectApiName] = useState<string>('');

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
      setObjectInfomations(
        entities.map((entity) => [
          { value: entity.label, readOnly: true },
          { value: entity.qualifiedApiName, readOnly: true },
        ])
      );

      const fieldInfosBuilder = new Map<string, Matrix<CellBase>>();
      for (const entity of entities) {
        if (!entity.qualifiedApiName) {
          continue;
        }

        fieldInfosBuilder.set(
          entity.qualifiedApiName,
          entity.fields?.map((field) => [
            { value: field.label, readOnly: true },
            { value: field.qualifiedApiName, readOnly: true },
            { value: field.dataType, readOnly: true },
          ]) ?? []
        );
      }
      setFieldInformationsByObject(Object.fromEntries(fieldInfosBuilder));
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
        </Grid>

        <Grid xs={12}>
          <EntityViewer
            objectInformations={objectInformations}
            fieldInformationsByObject={fieldInformationsByObject}
            onSelect={(objectApiName: string) => {
              setSeletedObjectApiName(objectApiName);
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default EntityView;
