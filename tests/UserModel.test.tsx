import { getSnapshot } from "mobx-state-tree";

import User from "../src/models/User";
import UserList from "../src/models/UserList";

describe("User model Tests", () => {
  let item;
  let emptyItem;
  beforeAll(() => {
    item = User.create({
      age: 30,
      name: "TestUser",
    });
    emptyItem = UserList.create({});
  });

  test("Can create a instance of a User", () => {
    expect(item.age).toBe(30);
    expect(item.email).toBe("");
  });

  test("Can create a UserList", () => {
    const item2 = UserList.create({
      users: [{
        age: 30,
        name: "TestUser",
      }],
    });

    expect(emptyItem.users.length).toBe(0);
    expect(item2.users.length).toBe(1);
    expect(item2.users[0].age).toBe(30);
    expect(item2.users[0].email).toBe("");
  });

  test("Can add user to UserList", () => {
    emptyItem.add({
      age: 30,
      name: "TestUser",
    });

    expect(emptyItem.users.length).toBe(1);
    expect(emptyItem.users[0].age).toBe(30);
    expect(emptyItem.users[0].email).toBe("");
  });

  test("Can use User Views", () => {
    emptyItem.add({
      age: 20,
      name: "TestUser2",
    });

    expect(emptyItem.totalUsers).toBe(2);
    expect(emptyItem.averageAge).toBe(25);
  });
});
