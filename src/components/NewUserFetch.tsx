import {Button} from "material-ui";
import {observer} from "mobx-react";
import * as React from "react";
import {IUserList} from "./Interfaces";
import DialogView from "./Views/DialogView";

const FetchNewUsers = ({usersList}: IUserList) => {
  const dialogContent = {
    description: "Click \"Add Users\" button to add Demo users from remote API service.",
    switchFunc: usersList.switchFetchUsers,
    switchVar: usersList.isFetchUserDialog,
    title: "Add New Users Remotely",
  };
  return (
    <DialogView state={usersList} content={dialogContent}>
      <Button onClick={usersList.fetchUsers} variant="raised" color="primary">
        Add Users
      </Button>
    </DialogView>
  );
};

export default observer(FetchNewUsers);
