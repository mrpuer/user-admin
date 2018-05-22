import { CssBaseline } from "material-ui";
import * as React from "react";
import { IUserList } from "./Interfaces";
import Menu from "./Menu";
import UserList from "./UserList";
import HeaderView from "./Views/HeaderView";

const styles = {
    content: {
    },
    menu: {
    },
    root: {
        display: "flex",
    },
};

class App extends React.Component<IUserList, {}> {
    public render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <HeaderView />
                <div style={styles.root}>
                    <Menu usersList={this.props.usersList} style={styles.menu} />
                    <UserList usersList={this.props.usersList} style={styles.content} />
                </div>
            </React.Fragment>
        );
    }
}

export default App;
