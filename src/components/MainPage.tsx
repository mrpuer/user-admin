import * as React from "react";
import { IUserList } from "./Interfaces";
import Menu from "./Menu";
import UserList from "./UserList";

const styles = {
    root: {
        display: "flex",
    },
};

const App = ({usersList}: IUserList) => {
  return (
    <div style={styles.root}>
        <Menu usersList={usersList} />
        <UserList usersList={usersList} />
    </div>
  );
};

export default App;
