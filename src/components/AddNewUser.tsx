import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "material-ui";
import {observer} from "mobx-react";
import * as React from "react";
import User from "../models/User";
import { IUserList } from "./Interfaces";
import UserEdit from "./UserEdit";

class AddNewUser extends React.Component<IUserList, {newUser: any}> {
  constructor(props: any) {
    super(props);
    this.state = {newUser: User.create({})};
  }

  public render() {
    return (
      <div>
        <Dialog
          open={this.props.usersList.isAddUserDialog}
          onClose={this.cancelClick}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add a new user</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Some text about users data.
            </DialogContentText>
              <UserEdit user={this.state.newUser} />
            </DialogContent>
          <DialogActions>
            <Button onClick={this.cancelClick} color="primary">
              Cancel
            </Button>
            <Button onClick={this.addUserClick} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
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

export default observer(AddNewUser);
