import { getSnapshot } from "mobx-state-tree";

import User from "../src/models/User";
import UserList from "../src/models/UserList";

it("Can create a instance of a User", () => {
  const item = User.create({
    age: 30,
    name: "TestUser",
  });

  expect(item.age).toBe(30);
  expect(item.email).toBe("");
});

it("Can create a UserList", () => {
  const item = UserList.create({
    users: [{
      age: 30,
      name: "TestUser",
    }],
  });

  const emptyItem = UserList.create({});

  expect(emptyItem.users.length).toBe(0);
  expect(item.users.length).toBe(1);
  expect(item.users[0].age).toBe(30);
  expect(item.users[0].email).toBe("");
});

it("Can add user to UserList", () => {
  const item = UserList.create({});
  item.add({
    age: 30,
    name: "TestUser",
  });

  expect(item.users.length).toBe(1);
  expect(item.users[0].age).toBe(30);
  expect(item.users[0].email).toBe("");

  expect(getSnapshot(item)).toMatchSnapshot();
});
