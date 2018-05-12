import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Icon,
  TableCell,
  TableRow,
  TextField,
  Tooltip,
} from "material-ui";
import { observer } from "mobx-react";
import { applySnapshot, clone, getSnapshot } from "mobx-state-tree";
import * as React from "react";
import { IUser } from "./Interfaces";
import UserEdit from "./UserEdit";

const styles = {
  avatar: {
    height: 60,
    width: 60,
  },
};

interface IUserItemState {
  isEditing: boolean;
  isDeleting: boolean;
  clone: any;
  user: any;
}

class UserItemView extends React.Component<IUser, IUserItemState> {
  constructor(props: any) {
    super(props);
    this.state = {
      clone: null,
      isDeleting: false,
      isEditing: false,
      user: this.props.user,
    };
  }

  public render() {
    const fullName = `${this.props.user.name.title} ${this.props.user.name.first} ${this.props.user.name.last}`;
    return (
      <TableRow hover={true}>
        <TableCell >
          <Avatar
            alt={fullName}
            src={this.state.user.picture.thumbnail}
            style={styles.avatar}
          />
        </TableCell>
        <TableCell>{fullName}</TableCell>
        <TableCell>{this.state.user.email}</TableCell>
        <TableCell>{this.state.user.phone}</TableCell>
        <TableCell>{this.state.user.login.username}</TableCell>
        <TableCell>{this.state.user.nat}</TableCell>
        <TableCell>
          {this.state.isEditing && this.UserEditDialog()}
          {this.state.isDeleting && this.UserDeleteDialog()}
          <Tooltip id="tooltip-icon" title="Edit this User">
            <Icon color="primary" onClick={this.onEditClick}>create</Icon>
          </Tooltip>
        </TableCell>
        <TableCell>
          <Tooltip id="tooltip-icon" title="Delete this user">
            <Icon color="error" onClick={this.onDeleteClick}>delete_sweep</Icon>
          </Tooltip>
        </TableCell>
      </TableRow>
    );
  }

  private UserEditDialog() {
    const fullName = `${this.props.user.name.title} ${this.props.user.name.first} ${this.props.user.name.last}`;
    return (
      <Dialog
        open={this.state.isEditing}
        onClose={this.onCancelEditClick}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit user {fullName}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Some text about users data.
          </DialogContentText>
          <UserEdit user={this.state.clone}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.onCancelEditClick} color="primary">
            Cancel
          </Button>
          <Button onClick={this.onSaveEditClick} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    );
  }

  private onEditClick = () => {
    this.setState({isEditing: true, clone: clone(this.props.user)});
  }
  private onCancelEditClick = () => {
    this.setState({isEditing: false, clone: null});
  }
  private onSaveEditClick = () => {
    applySnapshot(this.props.user, getSnapshot(this.state.clone));
    this.setState({isEditing: false, clone: null});
  }

  private UserDeleteDialog = () => {
    const fullName = `${this.props.user.name.title} ${this.props.user.name.first} ${this.props.user.name.last}`;
    return (
      <Dialog
        open={this.state.isDeleting}
        onClose={this.onCancelDeleteClick}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">REMOVE user {fullName}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.onCancelDeleteClick} color="primary">
            Cancel
          </Button>
          <Button onClick={this.onSaveDeleteClick} color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
  private onDeleteClick = () => {
    this.setState({isDeleting: true});
  }
  private onCancelDeleteClick = () => {
    this.setState({isDeleting: false});
  }
  private onSaveDeleteClick = () => {
    this.props.user.remove();
    this.setState({isDeleting: false});
  }
}

export default observer(UserItemView);
