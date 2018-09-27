import * as React from "react";
import { IRootStore } from "./Interfaces";
import Menu from "./Menu";
import UserList from "./UserList";

const styles = {
    root: {
        display: "flex",
    },
};

const App = ({rootStore}: IRootStore) => {
  return (
    <div style={styles.root}>
        <Menu rootStore={rootStore} />
        <UserList rootStore={rootStore} />
    </div>
  );
};

export default App;
