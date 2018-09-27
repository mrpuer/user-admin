import * as React from "react";
import {IRootStore} from "./Interfaces";
import DialogView from "./Views/DialogView";

const UserDeleteAll = ({rootStore}: IRootStore) => {
  const dialogContent = {
    actionFunc: rootStore.usersList.clear,
    description: "Are you sure?",
    switchFunc: rootStore.dialogs.switchRemoveAll,
    switchVar: rootStore.dialogs.isRemoveAll,
    title: `Remove All Users`,
  };
  return <DialogView content={dialogContent} />;
};

export default UserDeleteAll;
