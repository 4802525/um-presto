import { IconButton, Menu, MenuItem } from '@mui/material';
import { FC, useMemo, useRef, useState } from 'react';
import SecurityRoundedIcon from '@mui/icons-material/SecurityRounded';
import { EntityDefinition, PermissionSet } from '../../../generated';

interface PermissionSetIconButtonProps {
  instanceUrl: string;
  entity: EntityDefinition | undefined;
  permissionSets: PermissionSet[];
}

const PERMISSION_SET_PATH = 'lightning/setup/PermSets/page?address=';
export const PermissionSetIconButton: FC<PermissionSetIconButtonProps> = ({
  instanceUrl,
  entity,
  permissionSets,
}) => {
  const [showPermissionSetMenu, setShowPermissionSetMenu] = useState<boolean>(false);
  const permissionSetIconRef = useRef(null);

  const permissionSetUrl = useMemo(() => {
    return `${instanceUrl}/${PERMISSION_SET_PATH}`;
  }, [instanceUrl]);

  const entityPermissionPath = useMemo(() => {
    return `?s=EntityPermissions&o=${entity?.durableId ?? ''}`;
  }, [entity]);

  const isCustomMetadata = useMemo(() => {
    return entity?.qualifiedApiName?.endsWith('__mdt');
  }, [entity]);

  return (
    <>
      <IconButton
        id="permission-set-icon"
        color="primary"
        disabled={!entity}
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
        <MenuItem disabled>{entity?.label}</MenuItem>
        {!isCustomMetadata &&
          permissionSets.map((permissionSet) => {
            // エンコードしないと正常に遷移できない
            const param = encodeURIComponent(`/${permissionSet?.id ?? ''}${entityPermissionPath}`);
            const url = `${permissionSetUrl}${param}`;
            return (
              <MenuItem
                key={permissionSet.id}
                onClick={() => {
                  window.open(url, '_blank');
                }}
              >
                <a
                  href={url}
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  {permissionSet?.label}
                </a>
              </MenuItem>
            );
          })}
      </Menu>
    </>
  );
};
