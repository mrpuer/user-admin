import {addMiddleware, onSnapshot} from "mobx-state-tree";
import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./components/App";
import { RootStore, User } from "./models";

let initialState: any = {
    usersList: {users: [{gender:"female",name:{title:"mrs",first:"elsa",last:"mattila"},location:{street:"2089 pyynikintie",city:"jämijärvi",state:"tavastia proper",postcode:20255},email:"elsa.mattila@example.com",login:{username:"yellowgoose840",password:"hetfield",salt:"lFtFs80J",md5:"eee781179a698725fb3eeb1a222a4298",sha1:"7e33115307158f6ebf9bdda36cf6971c5e0b4c15",sha256:"e097a0552121754a9b56c99453a01c3e9306852d7ecfa923e825a3c894fdf053"},dob:"1982-10-07 23:03:14",registered:"2006-09-28 00:51:35",phone:"09-051-259",cell:"046-587-50-14",id:{name:"HETU",value:"1382-252S"},picture:{large:'https://randomuser.me/api/portraits/women/67.jpg',medium:'https://randomuser.me/api/portraits/med/women/67.jpg',thumbnail:'https://randomuser.me/api/portraits/thumb/women/67.jpg'},nat:"FI"}]},
    usersTable: {showEmail: false},
    dialogs: {  isAddUser: false,
        isFetchUser: false,
        isRemoveAll: false,
        showLoader: false,},
};

if (localStorage.getItem("useradminapp4")) {
    const json = JSON.parse(localStorage.getItem("useradminapp4") || "{}");
    if (RootStore.is(json)) { initialState = json; }
}

const store = RootStore.create(initialState);
console.log(store);
// users.load();

addMiddleware(store, (call, next) => {
    console.log(`[${call.type}] ${call.name}`);
    return next(call);
});

onSnapshot(store, (snapshot) => {
    localStorage.setItem("useradminapp4", JSON.stringify(snapshot));
});

function renderApp() {
    ReactDOM.render(
        <App rootStore={store} />,
        document.getElementById("App"),
    );
}

renderApp();
