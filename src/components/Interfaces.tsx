import User from "../models/User";
import UserList from "../models/UserList";

export type UserListType = typeof UserList.Type;
export type UserType = typeof User.Type;

export interface IUserList { usersList: UserListType; }
export interface IUser { user: UserType; }
