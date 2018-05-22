import * as React from "react";
import {IUser} from "./Interfaces";
import DialogView from "./Views/DialogView";

const UserDelete = (props: IUser) => {
  const fullName = `${props.user.name.title} ${props.user.name.first} ${props.user.name.last}`;
  const dialogContent = {
    actionFunc: props.user.remove,
    description: "Are you sure?",
    switchFunc: props.user.switchDeleteDialog,
    switchVar: props.user.showDeleteDialog,
    title: `REMOVE user ${fullName}`,
  };
  return <DialogView state={props.user} content={dialogContent} />;
};

export default UserDelete;
