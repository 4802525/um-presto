import { useEffect, useMemo, useState } from 'react';
import { EntityViewer } from '../../app/features/entityViewer/EntityViewer';
import { SfConnection } from '../../foundations/sfConnections';
import { EntityDefinition, PermissionSet } from '../../generated';
import { Box, Checkbox, FormControlLabel, Grid, Tab, Tabs } from '@mui/material';
import { FieldViewer } from '../../app/features/fieldViewer';
import EntityViewService from './EntityViewService';
import { PermissionSetIconButton } from '../../app/features/permissionSetIconButton';
import { ObjectSettingIconButton } from '../../app/features/objectSettingIconButton';
import { Layout } from '../../types/Layout';

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
  // Layout
  const [layouts, setLayouts] = useState<Layout[]>([]);
  // PermissionSet
  const [permissionSets, setPermissionSets] = useState<PermissionSet[]>([]);
  // Action
  const [selectedObjectApiName, setSeletedObjectApiName] = useState<string>('');
  const [onlyUm, setOnlyUm] = useState<boolean>(true);
  const { objectInformations, fieldInformationsByObject, fieldInformations } = useMemo(() => {
    return EntityViewService.buildViewerColumns(entityDefinitions, onlyUm);
  }, [entityDefinitions, onlyUm]);

  const filterdPermissionSets = useMemo(() => {
    return permissionSets.filter(
      (permissionSet) => !onlyUm || EntityViewService.isUmPermissionSet(permissionSet)
    );
  }, [permissionSets, onlyUm]);

  // tab
  const [tab, setTab] = useState<number>(0);

  useEffect(() => {
    if (!sfConnection) {
      return;
    }

    EntityViewService.retrieveEntityDefinitions().then((entities) => {
      setEntityDefinitions(entities);
    });

    EntityViewService.retrieveLayouts().then((layouts) => {
      setLayouts(layouts);
    });

    EntityViewService.retrievePermissionSets().then((permissionSets) =>
      setPermissionSets(permissionSets)
    );
  }, [sfConnection]);

  const selectedEntity = useMemo(() => {
    return entityDefinitions.find((entity) => entity.qualifiedApiName === selectedObjectApiName);
  }, [entityDefinitions, selectedObjectApiName]);

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
          <ObjectSettingIconButton
            instanceUrl={sfConnection.instanceUrl ?? ''}
            entity={selectedEntity}
            layouts={layouts}
          />

          <PermissionSetIconButton
            instanceUrl={sfConnection.instanceUrl ?? ''}
            entity={selectedEntity}
            permissionSets={filterdPermissionSets}
          />

          <FormControlLabel
            className="px-3"
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
