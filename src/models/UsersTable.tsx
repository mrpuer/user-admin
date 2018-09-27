import { types } from 'mobx-state-tree';

export const UsersTable = types.model({
  showEmail: false,
}).actions((self) => ({
  switchEmail() {
    self.showEmail = !self.showEmail;
  },
}));