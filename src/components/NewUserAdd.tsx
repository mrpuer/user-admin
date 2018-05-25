import {observer} from "mobx-react";
import * as React from "react";
import User from "../models/User";
import { IUserList } from "./Interfaces";
import UserForm from "./UserForm";
import DialogView from "./Views/DialogView";

class AddNewUser extends React.Component<IUserList, {newUser: any}> {
  constructor(props: any) {
    super(props);
    this.state = {newUser: User.create({})};
  }

  public render() {
    const dialogContent = {
      actionFunc: this.addUserClick,
      description: "Some text about users data.",
      switchFunc: this.cancelClick,
      switchVar: this.props.usersList.isAddUserDialog,
      title: "Add a new user",
    };
    return (
      <DialogView state={this.props.usersList} content={dialogContent}>
        <UserForm user={this.state.newUser} />
      </DialogView>
    );
  }

  private addUserClick = () => {
    this.props.usersList.add(this.state.newUser);
    this.setState({});
    this.props.usersList.switchAddUser();
  }
  private cancelClick = () => {
    this.setState({});
    this.props.usersList.switchAddUser();
  }
}

export default AddNewUser;
