import { Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from 'material-ui';
import { observer } from 'mobx-react';
import * as React from 'react';
import { IUser} from './Interfaces';
import UserItem from './UserItem';
import UserListToolbar from './UserListToolbar';

const styles = {
  head: {
    backgroundColor: "#E0F2F1",
    color: "white",
  },
  tableBotttom: {
    marginTop: 5,
    padding: 10,
  },
};

const UserList = observer(({ usersList }) => {
  return (
    <Paper>
      {/* <UserListToolbar usersList={usersList} /> */}
      <Table>
        <TableHead style={styles.head}>
          <TableRow>
            <TableCell />
            <TableCell>Full Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Nationality</TableCell>
            <TableCell>Edit</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {usersList.users.map((user: any, i: number): {} => <UserItem key={i} user={user} />)}
        </TableBody>
      </Table>
      <Typography variant="caption" gutterBottom={true} align="left" style={styles.tableBotttom}>
        Total Users: {usersList.totalUsers}
      </Typography>
    </Paper>
  );
});

export default UserList;
