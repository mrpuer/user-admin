import * as React from "react";
import {IUserList} from "./Interfaces";
import DialogView from "./Views/DialogView";

const UserDeleteAll = ({usersList}: IUserList) => {
  const dialogContent = {
    actionFunc: usersList.clear,
    description: "Are you sure?",
    switchFunc: usersList.switchRemoveAll,
    switchVar: usersList.isRemoveAllDialog,
    title: `Remove All Users`,
  };
  return <DialogView state={usersList} content={dialogContent} />;
};

export default UserDeleteAll;
