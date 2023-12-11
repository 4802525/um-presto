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

const CUSTOM_METADATA_PATH = '/lightning/setup/CustomMetadata/page?address=';
const OBJECT_MANAGER_PATH = 'lightning/setup/ObjectManager';

export const ObjectSettingIconButton: FC<ObjectSettingIconButtonProps> = ({
  instanceUrl,
  entity,
  layouts,
}) => {
  const [showObjectSettingMenu, setShowObjectSettingMenu] = useState<boolean>(false);
  const objectSettingIconRef = useRef(null);

  const objectLayouts = useMemo(() => {
    return layouts.filter((layout) => layout.EntityDefinitionId === entity?.durableId);
  }, [entity, layouts]);

  const detailPages = useMemo(() => {
    if (entity?.isCustomSetting) {
      return [];
    }

    if (entity?.qualifiedApiName?.endsWith('__mdt')) {
      const metadataUrl = `${instanceUrl}/${CUSTOM_METADATA_PATH}`;
      const customMetadataDetailParam = `/${entity?.durableId ?? ''}?setupid=CustomMetadata`;
      return [
        {
          label: 'カスタムメタデータ詳細',
          url: `${metadataUrl}${encodeURIComponent(customMetadataDetailParam)}`,
        },
      ];
    }

    const objectUrl = `${instanceUrl}/${OBJECT_MANAGER_PATH}/${entity?.durableId ?? ''}`;
    return [
      {
        label: 'オブジェクト詳細',
        url: `${objectUrl}/Details/view`,
      },
      {
        label: 'ページレイアウト割当',
        url: `${objectUrl}/PageLayouts/viewPageAssignments`,
      },
      {
        label: '新規ボタン上書き',
        url: `${objectUrl}/ButtonsLinksActions/New/editStandardAction`,
      },
      {
        label: '編集ボタン上書き',
        url: `${objectUrl}/ButtonsLinksActions/Edit/editStandardAction`,
      },
      ...objectLayouts.map((layout) => ({
        label: layout.Name,
        url: `${objectUrl}/PageLayouts/${layout.Id}/view`,
      })),
    ];
  }, [instanceUrl, entity, objectLayouts]);

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

        {detailPages.map((page, index) => {
          return (
            <a
              key={index}
              href={page.url}
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <MenuItem
                onClick={() => {
                  window.open(page.url, '_blank');
                }}
              >
                {page.label}
              </MenuItem>
            </a>
          );
        })}
      </Menu>
    </>
  );
};
