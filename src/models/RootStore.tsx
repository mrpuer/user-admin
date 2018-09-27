import { types } from 'mobx-state-tree';
import { Dialogs, User, UsersTable, UsersList} from "./";

console.log('HERE');
export const RootStore = types.model({
  usersList: types.optional(UsersList, {}),
  usersTable: types.optional(UsersTable, {}),
  dialogs: types.optional(Dialogs, {}),
});