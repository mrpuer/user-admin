import {ListItemText, MenuItem, MenuList, Paper} from "material-ui";
import {observer} from "mobx-react";
import * as React from "react";
import NewUserAdd from "./NewUserAdd";
import NewUserFetch from "./NewUserFetch";

const Menu = (props: any) => {
    return (
      <div className="main-menu">
      {props.usersList.isAddUserDialog && <NewUserAdd usersList={props.usersList} />}
      {props.usersList.switchFetchUsers && <NewUserFetch usersList={props.usersList} />}
        <Paper>
          <MenuList>
            <MenuItem>
              <ListItemText onClick={props.usersList.switchAddUser} inset={true} primary="Add User" />
            </MenuItem>
            <MenuItem>
              <ListItemText onClick={props.usersList.switchFetchUsers} inset={true} primary="Fetch List Users" />
            </MenuItem>
            <MenuItem>
              <ListItemText inset={true} primary="System Stats" />
            </MenuItem>
            <MenuItem>
              <ListItemText inset={true} primary="Settings" />
            </MenuItem>
          </MenuList>
        </Paper>
      </div>
    );
  };

export default observer(Menu);
