import {AppBar, Button, Grid, Icon, Paper, TextField, Typography, FormControl} from 'material-ui';
import { observer } from 'mobx-react';
import * as React from 'react';

const styles = {
  root: {
    padding: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    ['flex-direction']: 'column',
  },
  icon: {
    fontSize: 128,
  },
  form: {
    padding: 40,
  }
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
      loginInput: 'adm',
      passwordInput: '123',
    };
  }

  public render() {
    return (
      <div style={styles.root}>
        <Icon style={styles.icon} color="disabled">fingerprint</Icon>
          <Paper>
          <div style={styles.form}>
          <FormControl>
            <Typography variant="display1" gutterBottom>
              Admin Area Login
            </Typography>
            <TextField
              fullWidth
              label="Login"
              value={this.state.loginInput}
              onChange={this.handleLoginInput}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              value={this.state.passwordInput}
              onChange={this.handlePasswordInput}
              margin="normal"
            />
            <Button onClick={this.onSubmitLogin} color="primary" variant="raised">Login</Button>
            </FormControl>
            </div>
          </Paper>
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
          loginInput: 'adm',
          passwordInput: '123',
        });
    } else {
      alert('Invalid Login Data!');
    }
  }
}

export default observer(Login);
