import { Button } from "material-ui";
import { observer } from "mobx-react";
import * as React from "react";
import { IRootStore } from "./Interfaces";
import DialogView from "./Views/DialogView";

const FetchNewUsers = ({rootStore}: IRootStore) => {
  const dialogContent = {
    description: "Click \"Add Users\" button to add Demo users from remote API service.",
    switchFunc: rootStore.dialogs.switchFetchUsers,
    switchVar: rootStore.dialogs.isFetchUser,
    title: "Add New Users Remotely",
  };
  return (
    <DialogView content={dialogContent}>
      <Button onClick={rootStore.usersList.fetchUsers} variant="raised" color="primary">
        Add Users
      </Button>
    </DialogView>
  );
};

export default observer(FetchNewUsers);
