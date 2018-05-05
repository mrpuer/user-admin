import { types } from "mobx-state-tree";
import User from "./User";

const UserList = types.model({
  users: types.optional(types.array(User), []),
}).actions((self) => ({
  add(item: any) {
    self.users.push(item);
  },
}));

export default UserList;
