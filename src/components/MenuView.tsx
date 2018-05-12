import {ListItemText, MenuItem, MenuList, Paper} from "material-ui";
import {observer} from "mobx-react";
import * as React from "react";
import AddNewUser from "./AddNewUser";
import FetchNewUsers from "./FetchNewUsers";

const styles = {
  menu: {
    width: 240,
  },
};

const MenuView = (props: any) => {
    return (
      <div className="main-menu" style={styles.menu}>
      {props.usersList.isAddUserDialog && <AddNewUser usersList={props.usersList} />}
      {props.usersList.switchFetchUsers && <FetchNewUsers usersList={props.usersList} />}
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

export default observer(MenuView);
