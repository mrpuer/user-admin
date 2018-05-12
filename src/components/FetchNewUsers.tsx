import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "material-ui";
import {observer} from "mobx-react";
import * as React from "react";
import {IUserList} from "./Interfaces";

const FetchNewUsers = (props: IUserList) => {
  return (
    <Dialog
      open={props.usersList.isFetchUserDialog}
      onClose={props.usersList.switchFetchUsers}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Add New Users Remotely</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Click "Add Users" button to add Demo users from remote API service.
        </DialogContentText>
        <DialogContentText>
        <Button onClick={props.usersList.fetchUsers} variant="raised" color="primary">
          Add Users
        </Button>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.usersList.switchFetchUsers} color="primary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default observer(FetchNewUsers);
