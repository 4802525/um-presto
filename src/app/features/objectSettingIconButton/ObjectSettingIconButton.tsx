import { FC, useMemo, useRef, useState } from 'react';
import { EntityDefinition } from '../../../generated';
import { IconButton, Menu, MenuItem } from '@mui/material';
import ViewSidebarRoundedIcon from '@mui/icons-material/ViewSidebarRounded';
import { Layout } from '../../../types/Layout';

interface ObjectSettingIconButtonProps {
  instanceUrl: string;
  entity: EntityDefinition | undefined;
  layouts: Layout[];
}

const OBJECT_MANAGER_PATH = 'lightning/setup/ObjectManager';

export const ObjectSettingIconButton: FC<ObjectSettingIconButtonProps> = ({
  instanceUrl,
  entity,
  layouts,
}) => {
  const [showObjectSettingMenu, setShowObjectSettingMenu] = useState<boolean>(false);
  const objectSettingIconRef = useRef(null);

  const objectUrl = useMemo(() => {
    return `${instanceUrl}/${OBJECT_MANAGER_PATH}/${entity?.durableId ?? ''}`;
  }, [instanceUrl, entity]);

  const objectLayouts = useMemo(() => {
    return layouts.filter((layout) => layout.EntityDefinitionId === entity?.durableId);
  }, [entity, layouts]);

  return (
    <>
      <IconButton
        color="primary"
        id="object-setting-icon"
        disabled={!entity}
        size="large"
        ref={objectSettingIconRef}
        onClick={() => {
          setShowObjectSettingMenu(true);
        }}
      >
        <ViewSidebarRoundedIcon />
      </IconButton>

      <Menu
        id="object-setting-menu-menu"
        open={showObjectSettingMenu}
        anchorEl={objectSettingIconRef.current}
        MenuListProps={{
          'aria-labelledby': 'object-setting-icon',
        }}
        onClose={() => {
          setShowObjectSettingMenu(false);
        }}
      >
        <MenuItem disabled>{entity?.label}</MenuItem>
        <MenuItem
          onClick={() => {
            const url = `${objectUrl}/Details/view`;
            window.open(url, '_blank');
          }}
        >
          オブジェクト詳細
        </MenuItem>
        <MenuItem
          onClick={() => {
            const url = `${objectUrl}/PageLayouts/viewPageAssignments`;
            window.open(url, '_blank');
          }}
        >
          ページレイアウト割当
        </MenuItem>
        <MenuItem
          onClick={() => {
            const url = `${objectUrl}/ButtonsLinksActions/New/editStandardAction`;
            window.open(url, '_blank');
          }}
        >
          新規ボタン上書き
        </MenuItem>
        <MenuItem
          onClick={() => {
            const url = `${objectUrl}/ButtonsLinksActions/Edit/editStandardAction`;
            window.open(url, '_blank');
          }}
        >
          編集ボタン上書き
        </MenuItem>
        {objectLayouts.map((layout) => {
          return (
            <MenuItem
              key={layout.Id}
              onClick={() => {
                const url = `${objectUrl}/PageLayouts/${layout.Id}/view`;
                window.open(url, '_blank');
              }}
            >
              {layout.Name}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};
