import {addMiddleware, onSnapshot} from "mobx-state-tree";
import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./components/App";
import {IUserList} from "./components/Interfaces";
import UserList from "./models/UserList";

let initialState: any = {
    isAddUserDialog: false,
    isFetchUserDialog: false,
    isRemoveAllDialog: false,
    showLoader: false,
    users: [],
};

if (localStorage.getItem("useradminapp")) {
    const json = JSON.parse(localStorage.getItem("useradminapp") || "{}");
    if (UserList.is(json)) { initialState = json; }
}

const users = UserList.create(initialState);
// users.load();

addMiddleware(users, (call, next) => {
    console.log(`[${call.type}] ${call.name}`);
    return next(call);
});

onSnapshot(users, (snapshot) => {
    localStorage.setItem("useradminapp", JSON.stringify(snapshot));
});

function renderApp() {
    ReactDOM.render(
        <App usersList={users} />,
        document.getElementById("App"),
    );
}

renderApp();
