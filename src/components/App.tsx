import { CssBaseline } from 'material-ui';
import { observer } from 'mobx-react';
import * as React from 'react';
import { IRootStore } from './Interfaces';
import Login from './Login';
import MainPage from './MainPage';
import HeaderView from './Views/HeaderView';

class App extends React.Component<IRootStore, {isLogged: boolean}> {
    constructor(props: IRootStore) {
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
                {this.state.isLogged ?
                    <MainPage rootStore={this.props.rootStore} /> :
                    <Login switchLogin={this.switchLogin} />
                }
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
