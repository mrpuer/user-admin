import {RootStore, User, UsersList} from "../models";

export type UsersListType = typeof UsersList.Type;
export type UserType = typeof User.Type;
export type RootStoreType = typeof RootStore.Type;

export interface IUsersList { usersList: UsersListType; }
export interface IUser { user: UserType; }
export interface IRootStore { rootStore: RootStoreType; }

