import { CssBaseline } from "material-ui";
import * as React from "react";
import HeaderView from "./HeaderView";
import { IUserList } from "./Interfaces";
import MenuView from "./MenuView";
import UserListView from "./UserListView";

class App extends React.Component<IUserList, {}> {
    public render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <HeaderView />
                <MenuView usersList={this.props.usersList} />
                <UserListView usersList={this.props.usersList} />
            </React.Fragment>
        );
    }
}

export default App;
