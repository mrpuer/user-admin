import { applySnapshot, getParent, destroy, flow, types } from "mobx-state-tree";
import {UserType} from "../components/Interfaces";
import { User } from "./";

export const UsersList = types.model({
  users: types.optional(types.array(User), []),
}).actions((self) => ({
  add(item: UserType) {
    self.users.push(item);
  },
  remove(user: UserType) {
    destroy(user);
  },
  fetchUsers: flow(function* fetchUsers() {
    const response = yield window.fetch("https://randomuser.me/api/?results=5");
    const newUsers = yield response.json();
    const newUsersFormatted = newUsers.results.map((user: UserType) => {
      user.dob = user.dob.split(" ")[0];
      user.registered = user.registered.split(" ")[0];
      return user;
    });
    self.users.push(...newUsersFormatted);
    getParent(self).dialogs.switchFetchUsers();
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
  get userKeys() {
    return Object.keys(User.properties).map(key => {
      switch(key) {
        case 'cell':
          return 'Cell Phone';
        case 'dob':
          return 'Date of Birthd';
        case 'email':
          return 'Email';
        case 'gender':
          return 'Gender';
        case 'id':
          return 'ID';
        case 'location':
          return 'Location';
        case 'login':
          return 'Username';
        case 'name':
          return 'Full Name';
        case 'nat':
          return 'Nationality';
        case 'phone':
          return 'Phone';
        case 'picture':
          return 'Avatar';
        case 'registered':
          return 'Reg. Date';
        case 'showDeleteDialog':
          return 'Delete';
        case 'showEditDialog':
          return 'Edit';
        default:
          return 'Invalid User Key!';
      }
    });
  },
}));
