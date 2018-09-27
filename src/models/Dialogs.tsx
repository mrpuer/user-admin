import { types } from 'mobx-state-tree';

export const Dialogs = types.model({
  isAddUser: false,
  isFetchUser: false,
  isRemoveAll: false,
  showLoader: false,
}).actions((self) => ({
  switchAddUser() {
    self.isAddUser = !self.isAddUser;
  },
  switchFetchUsers() {
    self.isFetchUser = !self.isFetchUser;
  },
  switchRemoveAll() {
    self.isRemoveAll = !self.isRemoveAll;
  },
  switchLoader() {
    self.showLoader = !self.showLoader;
  },
}));