import { Icon, ListItemIcon, ListItemText, MenuItem, MenuList, Paper, Tooltip } from "material-ui";
import { observer } from "mobx-react";
import * as React from "react";
import { IRootStore } from "./Interfaces";
import NewUserAdd from "./NewUserAdd";
import NewUserFetch from "./NewUserFetch";
import UserDeleteAll from "./UserDeleteAll";

const Menu = ({rootStore}: IRootStore) => {
    const { dialogs, usersList } = rootStore;
    return (
      <div className="main-menu">
      {dialogs.isAddUser && <NewUserAdd rootStore={rootStore} />}
      {dialogs.isFetchUser && <NewUserFetch rootStore={rootStore} />}
      {dialogs.isRemoveAll && <UserDeleteAll rootStore={rootStore} />}
        <Paper>
          <MenuList>
            <MenuItem>
            <ListItemIcon>
            <Icon color="primary">add</Icon>
          </ListItemIcon>
              <ListItemText onClick={dialogs.switchAddUser} inset={true} primary="Add User" />
            </MenuItem>
            <MenuItem>
            <ListItemIcon>
            <Icon color="primary">group_add</Icon>
          </ListItemIcon>
              <ListItemText onClick={dialogs.switchFetchUsers} inset={true} primary="Fetch New Users" />
            </MenuItem>
            <MenuItem>
            <ListItemIcon>
            <Icon color="primary">timeline</Icon>
          </ListItemIcon>
              <ListItemText inset={true} primary="System Stats" />
            </MenuItem>
            <MenuItem>
            <ListItemIcon>
            <Icon color="primary">settings</Icon>
          </ListItemIcon>
              <ListItemText inset={true} primary="Settings" />
            </MenuItem>
            <Tooltip id="tooltip-icon" title="This action can't be restored">
            <MenuItem style={{backgroundColor: "#FFCCBC"}}>
            <ListItemIcon>
            <Icon color="primary">clear</Icon>
          </ListItemIcon>
              <ListItemText inset={true} primary="Delete All Users" onClick={dialogs.switchRemoveAll} />
            </MenuItem>
            </Tooltip>
          </MenuList>
        </Paper>
      </div>
    );
  };

export default observer(Menu);
