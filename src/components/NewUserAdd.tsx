import { observer } from "mobx-react";
import * as React from "react";
import { User } from "../models";
import { IRootStore, UserType } from "./Interfaces";
import UserForm from "./UserForm";
import DialogView from "./Views/DialogView";

class NewUserAdd extends React.Component<IRootStore, {newUser: UserType}> {
  constructor(props: IRootStore) {
    super(props);
    this.state = {newUser: User.create({})};
  }

  public render() {
    const dialogContent = {
      actionFunc: this.addUserClick,
      description: "Some text about users data.",
      switchFunc: this.cancelClick,
      switchVar: this.props.rootStore.dialogs.isAddUser,
      title: "Add a new user",
    };
    return (
      <DialogView content={dialogContent}>
        <UserForm user={this.state.newUser} />
      </DialogView>
    );
  }

  private addUserClick = () => {
    this.props.rootStore.usersList.add(this.state.newUser);
    this.setState({});
    this.props.rootStore.dialogs.switchAddUser();
  }
  private cancelClick = () => {
    this.setState({});
    this.props.rootStore.dialogs.switchAddUser();
  }
}

export default observer(NewUserAdd);
