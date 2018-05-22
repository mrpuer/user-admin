import { Avatar, Icon, TableCell, TableRow, Tooltip, withStyles } from "material-ui";
import { observer } from "mobx-react";
import * as React from "react";
import { IUser } from "./Interfaces";
import UserDelete from "./UserDelete";
import UserEdit from "./UserEdit";
import UserForm from "./UserForm";

const styles = {
  avatar: {
    height: 60,
    width: 60,
  },
};

class UserItem extends React.Component<IUser, {}> {
  public render() {
    const {user} = this.props;
    const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;
    const noAvatarImg = "http://aleksin-amt.ru/wp-content/uploads/2018/03/user.png";
    return (
      <TableRow hover={true}>
          {user.showEditDialog && <UserEdit user={user}/>}
          {user.showDeleteDialog && <UserDelete user={user}/>}
        <TableCell >
          <Avatar
            alt={fullName}
            src={user.picture.thumbnail ? user.picture.thumbnail : noAvatarImg}
            style={styles.avatar}
          />
        </TableCell>
        <TableCell>{fullName}</TableCell>
        <TableCell>{user.email}</TableCell>
        <TableCell>{user.phone}</TableCell>
        <TableCell>{user.login.username}</TableCell>
        <TableCell>{user.nat}</TableCell>
        <TableCell>
          <Tooltip id="tooltip-icon" title="Edit this User">
            <Icon color="primary" onClick={user.switchEditDialog}>create</Icon>
          </Tooltip>
        </TableCell>
        <TableCell>
          <Tooltip id="tooltip-icon" title="Delete this user">
            <Icon color="error" onClick={user.switchDeleteDialog}>delete_sweep</Icon>
          </Tooltip>
        </TableCell>
      </TableRow>
    );
  }
}

export default observer(UserItem);
