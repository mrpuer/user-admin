import {addMiddleware, onSnapshot} from "mobx-state-tree";
import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./components/App";
import {IUserList} from "./components/Interfaces";
import UserList from "./models/UserList";

let initialState: any = {
    isAddUserDialog: false,
    users: [{
        cell: "(065)-247-9303",
        dob: "1990-01-01",
        email: "romain.hoogmoed@example.com",
        gender: "male",
        id: {
            name: "BSN",
            value: "04242023",
        },
        location: {
            city: "maasdriel",
            postcode: 69217,
            state: "zeeland",
            street: "1861 jan pieterszoon coenstraat",
        },
        login: {
            md5: "6d83a8c084731ee73eb5f9398b923183",
            password: "jokers",
            salt: "UGtRFz4N",
            sha1: "cb21097d8c430f2716538e365447910d90476f6e",
            sha256: "5a9b09c86195b8d8b01ee219d7d9794e2abb6641a2351850c49c309f1fc204a0",
            username: "lazyduck408",
        },
        name: {
            first: "romain",
            last: "hoogmoed",
            title: "mr",
        },
        nat: "NL",
        phone: "(656)-976-4980",
        picture: {
            large: "https://randomuser.me/api/portraits/men/83.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/83.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/83.jpg",
        },
        registered: "2018-01-01",
      },
    ],
};

if (localStorage.getItem("useradminapp")) {
    const json = JSON.parse(localStorage.getItem("useradminapp") || "{}");
    if (UserList.is(json)) { initialState = json; }
}

const Users = UserList.create(initialState);
addMiddleware(Users, (call, next) => {
    console.log(`[${call.type}] ${call.name}`);
    return next(call);
});

onSnapshot(Users, (snapshot) => {
    localStorage.setItem("useradminapp", JSON.stringify(snapshot));
});

function renderApp() {
    ReactDOM.render(
        <App usersList={Users} />,
        document.getElementById("App"),
    );
}

renderApp();
