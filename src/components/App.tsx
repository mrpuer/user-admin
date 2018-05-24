import { CircularProgress, CssBaseline } from "material-ui";
import { observer } from "mobx-react";
import * as React from "react";
import { IUserList } from "./Interfaces";
import Login from "./Login";
import MainPage from "./MainPage";
import Menu from "./Menu";
import UserList from "./UserList";
import HeaderView from "./Views/HeaderView";

class App extends React.Component<IUserList, {isLogged: boolean}> {
    constructor(props: IUserList) {
        super(props);
        this.state = {
            isLogged: false,
        };
    }
    public render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <HeaderView isLogged={this.state.isLogged} switchLogin={this.switchLogin} />
                {this.state.isLogged ? // tslint:disable-next-line:jsx-no-multiline-js
                    <MainPage usersList={this.props.usersList} /> :
                    <Login switchLogin={this.switchLogin} />}
            </React.Fragment>
        );
    }

    private switchLogin = () => {
        this.setState({
            isLogged: !this.state.isLogged,
        });
    }
}

export default observer(App);
