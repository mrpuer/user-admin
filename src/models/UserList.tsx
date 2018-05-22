import { destroy, flow, types } from "mobx-state-tree";
import {UserType} from "../components/Interfaces";
import User from "./User";

const UserList = types.model({
  isAddUserDialog: false,
  isFetchUserDialog: false,
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
  fetchUsers: flow(function* fetchUsers() {
    const response = yield window.fetch("https://randomuser.me/api/?results=10");
    const newUsers = yield response.json();
    const newUsersFormatted = newUsers.results.map((user: UserType) => {
      user.dob = user.dob.split(" ")[0];
      user.registered = user.registered.split(" ")[0];
      return user;
    });
    self.users.push(...newUsersFormatted);
    self.isFetchUserDialog = false;
}),
})).views((self) => ({
  get totalUsers() {
    return self.users.length;
  },
  get averageAge() {
    // const agesSum =  self.users.reduce((acc, item) => item.age + acc, 0);
    return "Average Age here"; // agesSum / this.totalUsers;
  },
}));

export default UserList;
