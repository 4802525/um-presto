import { IconButton, Menu, MenuItem } from '@mui/material';
import { FC, useMemo, useRef, useState } from 'react';
import SecurityRoundedIcon from '@mui/icons-material/SecurityRounded';
import { EntityDefinition, PermissionSet } from '../../../generated';

interface PermissionSetIconButtonProps {
  instanceUrl: string;
  entity: EntityDefinition | undefined;
  permissionSets: PermissionSet[];
}

// %2F → /
const PERMISSION_SET_PATH = 'lightning/setup/PermSets/page?address=%2F';
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
    // %3F → ?
    // %3D → =
    // %26 → &
    return `%3Fs%3DEntityPermissions%26o%3D${entity?.durableId ?? ''}`;
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
        {permissionSets.map((permissionSet) => {
          return (
            <MenuItem
              key={permissionSet.id}
              onClick={() => {
                const url = `${permissionSetUrl}${permissionSet?.id ?? ''}${entityPermissionPath}`;
                window.open(url, '_blank');
              }}
            >
              {permissionSet?.label}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};
