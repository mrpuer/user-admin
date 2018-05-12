import { Paper, Table, TableBody, TableCell, TableHead, TableRow } from "material-ui";
import { observer } from "mobx-react";
import * as React from "react";
import { IUser} from "./Interfaces";
import UserItemView from "./UserItemView";

const UserListView = observer(({ usersList }) => {
  return (
    <Paper>
      <Table>
        <TableHead>
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
          {usersList.users.map((user: any, i: number): {} => <UserItemView key={i} user={user} />)}
          <TableRow>
            <TableCell />
            <TableCell>Total Users: {usersList.totalUsers}</TableCell>
            <TableCell>Average Age: {usersList.averageAge}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
});

export default UserListView;
