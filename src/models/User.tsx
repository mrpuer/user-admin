import { types } from "mobx-state-tree";

const User = types.model({
  age: types.optional(types.number, 0),
  email: "",
  name: types.string,
});

export default User;
