import {AppBar, Button, createMuiTheme, TextField} from "material-ui";
import { observer } from "mobx-react";
import * as React from "react";
import { IUserList } from "./Interfaces";

const styles = {
  root: {
    margin: "auto",
  },
};

interface ILoginState {
  admin: {
      login: string;
      password: string;
  };
  loginInput: string;
  passwordInput: string;
}

class Login extends React.Component<{switchLogin: any}, ILoginState> {
  constructor(props: any) {
    super(props);
    this.state = {
      admin: {
        login: process.env.ADMIN_LOGIN as string,
        password: process.env.ADMIN_PASSWORD as string,
      },
      loginInput: "adm",
      passwordInput: "123",
    };
  }

  public render() {
    return (
      <div style={styles.root}>
        <TextField
          label="Login"
          value={this.state.loginInput}
          onChange={this.handleLoginInput}
        />
       <br/>
        <TextField
          label="Password"
          type="password"
          value={this.state.passwordInput}
          onChange={this.handlePasswordInput}
        />
         <br/>
         <Button onClick={this.onSubmitLogin} color="primary" variant="raised">Login</Button>
     </div>
    );
  }

  private handleLoginInput = (event: any) => {
    this.setState({
      loginInput: event.target.value,
    });
  }

  private handlePasswordInput = (event: any) => {
    this.setState({
      passwordInput: event.target.value,
    });
  }

  private onSubmitLogin = (event: any) => {
    if (this.state.loginInput === this.state.admin.login
      && this.state.passwordInput === this.state.admin.password) {
        this.props.switchLogin();
        this.setState({
          loginInput: "adm",
          passwordInput: "123",
        });
    } else {
      alert("Invalid Login Data!");
    }
  }
}

export default observer(Login);
