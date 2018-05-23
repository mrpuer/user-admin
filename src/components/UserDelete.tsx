import * as React from "react";
import {IUser} from "./Interfaces";
import DialogView from "./Views/DialogView";

const UserDelete = ({user}: IUser) => {
  const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;
  const dialogContent = {
    actionFunc: user.remove,
    description: "Are you sure?",
    switchFunc: user.switchDeleteDialog,
    switchVar: user.showDeleteDialog,
    title: `REMOVE user ${fullName}`,
  };
  return <DialogView state={user} content={dialogContent} />;
};

export default UserDelete;
