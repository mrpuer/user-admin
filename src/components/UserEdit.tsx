import {applySnapshot, clone, getSnapshot} from "mobx-state-tree";
import * as React from "react";
import { IUser } from "./Interfaces";
import UserForm from "./UserForm";
import DialogView from "./Views/DialogView";

class UserEdit extends React.Component<IUser, {clone: any}> {
  constructor(props: any) {
    super(props);
    this.state = {clone: clone(this.props.user)};
  }

  public render() {
    const fullName = `${this.props.user.name.title} ${this.props.user.name.first} ${this.props.user.name.last}`;
    const dialogContent = {
      actionFunc: this.onSaveEditClick,
      description: "Some text about users data.",
      switchFunc: this.onCancelEditClick,
      switchVar: this.props.user.showEditDialog,
      title: `Edit user ${fullName}`,
    };
    return (
      <DialogView state={this.props.user} content={dialogContent}>
        <UserForm user={this.state.clone}/>
      </DialogView>
    );
  }

  private onCancelEditClick = () => {
    this.setState({clone: null});
    this.props.user.switchEditDialog();
  }
  private onSaveEditClick = () => {
    applySnapshot(this.props.user, getSnapshot(this.state.clone));
    this.setState({clone: null});
    this.props.user.switchEditDialog();
  }
}

export default UserEdit;
