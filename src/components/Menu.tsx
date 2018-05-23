import {Icon, ListItemIcon, ListItemText, MenuItem, MenuList, Paper} from "material-ui";
import {observer} from "mobx-react";
import * as React from "react";
import NewUserAdd from "./NewUserAdd";
import NewUserFetch from "./NewUserFetch";
import UserDeleteAll from "./UserDeleteAll";

const Menu = ({usersList}: any) => {
    return (
      <div className="main-menu">
      {usersList.isAddUserDialog && <NewUserAdd usersList={usersList} />}
      {usersList.switchFetchUsers && <NewUserFetch usersList={usersList} />}
      {usersList.isRemoveAllDialog && <UserDeleteAll usersList={usersList} />}
        <Paper>
          <MenuList>
            <MenuItem>
            <ListItemIcon>
            <Icon color="primary">add</Icon>
          </ListItemIcon>
              <ListItemText onClick={usersList.switchAddUser} inset={true} primary="Add User" />
            </MenuItem>
            <MenuItem>
            <ListItemIcon>
            <Icon color="primary">group_add</Icon>
          </ListItemIcon>
              <ListItemText onClick={usersList.switchFetchUsers} inset={true} primary="Fetch New Users" />
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
            <MenuItem style={{backgroundColor: "#FFCCBC"}}>
            <ListItemIcon>
            <Icon color="primary">clear</Icon>
          </ListItemIcon>
              <ListItemText inset={true} primary="Delete All Users" onClick={usersList.switchRemoveAll} />
            </MenuItem>
          </MenuList>
        </Paper>
      </div>
    );
  };

export default observer(Menu);
