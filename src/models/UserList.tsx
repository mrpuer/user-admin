import { applySnapshot, destroy, flow, types } from "mobx-state-tree";
import {UserType} from "../components/Interfaces";
import User from "./User";

const UserList = types.model({
  isAddUserDialog: false,
  isFetchUserDialog: false,
  isRemoveAllDialog: false,
  showLoader: false,
  users: types.optional(types.array(User), []),
}).actions((self) => ({
  add(item: UserType) {
    self.users.push(item);
  },
  remove(user: UserType) {
    destroy(user);
  },
  switchAddUser() {
    self.isAddUserDialog = !self.isAddUserDialog;
  },
  switchFetchUsers() {
    self.isFetchUserDialog = !self.isFetchUserDialog;
  },
  switchRemoveAll() {
    self.isRemoveAllDialog = !self.isRemoveAllDialog;
  },
  fetchUsers: flow(function* fetchUsers() {
    self.showLoader = true;
    const response = yield window.fetch("https://randomuser.me/api/?results=5");
    const newUsers = yield response.json();
    const newUsersFormatted = newUsers.results.map((user: UserType) => {
      user.dob = user.dob.split(" ")[0];
      user.registered = user.registered.split(" ")[0];
      return user;
    });
    self.users.push(...newUsersFormatted);
    self.showLoader = false;
    self.isFetchUserDialog = false;
  }),
  // load: flow(function* load() {
  //   const response = yield window.fetch("https://randomuser.me/api/?results=5");
  //   const newUsers = yield response.json();
  //   const newUsersFormatted = newUsers.results.map((user: UserType) => {
  //     user.dob = user.dob.split(" ")[0];
  //     user.registered = user.registered.split(" ")[0];
  //     return user;
  //   });
  //   applySnapshot(self.users, newUsersFormatted);
  // }),
  clear() {
    applySnapshot(self, {users: []});
  },
})).views((self) => ({
  get totalUsers() {
    return self.users.length;
  },
}));

export default UserList;
