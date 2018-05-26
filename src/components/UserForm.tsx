import {FormControl, Input, InputLabel, MenuItem, Select, TextField, Typography} from 'material-ui';
import { observer } from 'mobx-react';
import * as React from 'react';
import { IUser } from './Interfaces';

class UserForm extends React.Component<IUser, {}> {
  public render() {
    const {
      name,
      nat,
      email,
      gender,
      location,
      login,
      dob,
      registered,
      phone,
      cell,
      id,
      picture,
    } = this.props.user;

    const styles = {
      full: {
        width: 500,
      },
      half: {
        width: 150,
      },
      oneLine: {
        float: 'left',
        margin: 10,
        width: 150,
      },
      root: {
        padding: 10,
      },
      titles: {
        marginBottom: 10,
        marginTop: 20,
      },
    };

    return (
      <div className="user-edit" style={styles.root}>
      <FormControl style={styles.full}>
        <Typography variant="body2" align="center" style={styles.titles}>
          User Login Data
        </Typography>
        <TextField
          id="username"
          label="Username"
          defaultValue={login.username}
          onChange={this.onLoginChange}
          required={true}
        />
        <TextField
          label="Password"
          defaultValue={login.password}
          type="password"
          onChange={this.onPasswordChange}
          required={true}
        />

      <Typography variant="body2" align="center" style={styles.titles}>
        User Gender
      </Typography>
      <TextField
          id="gender"
          select={true}
          label="Select gender"
          value={gender}
          onChange={this.onGenderChange}
          margin="normal"
          style={styles.half}
      >
        <MenuItem value="male">
          Male
        </MenuItem>
        <MenuItem value="female">
          Female
        </MenuItem>
      </TextField>

      <Typography variant="body2" align="center" style={styles.titles}>
        User Full Name
      </Typography>
      <TextField
          id="title"
          select={true}
          label="Select title"
          value={name.title}
          onChange={this.onTitleChange}
          style={styles.half}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value="mr">Mr</MenuItem>
        <MenuItem value="monsieur">Monsieur</MenuItem>
        <MenuItem value="ms">Ms</MenuItem>
        <MenuItem value="mrs">Mrs</MenuItem>
        <MenuItem value="miss">Miss</MenuItem>
        <MenuItem value="madame">Madame</MenuItem>
        <MenuItem value="mademoiselle">Mademoiselle</MenuItem>
      </TextField>

      <TextField
        label="User First Name"
        defaultValue={name.first}
        onChange={this.onFNameChange}
      />

      <TextField
        label="User Last Name"
        defaultValue={name.last}
        onChange={this.onLNameChange}
      />
      <Typography variant="body2" align="center" style={styles.titles}>
        User Contact Info
      </Typography>
      <TextField
        label="User Email Address"
        defaultValue={email}
        onChange={this.onEmailChange}
        required={true}
      />

      <TextField
        label="User Nationality"
        defaultValue={nat}
        onChange={this.onNatChange}
      />

      <TextField
        id="street"
        label="Street"
        defaultValue={location.street}
        onChange={this.onStreetChange}
      />
      <TextField
        label="City"
        defaultValue={location.city}
        onChange={this.onCityChange}
      />
      <TextField
        label="State"
        defaultValue={location.state}
        onChange={this.onStateChange}
      />
      <TextField
        label="Post Code"
        defaultValue={location.postcode}
        onChange={this.onPostChange}
      />
      <TextField
        label="Phone Number"
        defaultValue={phone}
        onChange={this.onPhoneChange}
      />
      <TextField
        label="Cell Number"
        defaultValue={cell}
        onChange={this.onCellChange}
      />

      <Typography variant="body2" align="center" style={styles.titles}>
        User Private Info
      </Typography>
      <TextField
        id="date"
        label="Birthday"
        type="date"
        defaultValue={dob}
        InputLabelProps={{shrink: true}}
        margin="normal"
        onChange={this.onDOBChange}
        style={styles.half}
      />
      <TextField
        id="regDate"
        label="Register Date"
        type="date"
        defaultValue={registered}
        InputLabelProps={{shrink: true}}
        onChange={this.onRegDateChange}
        style={styles.half}
      />
      <TextField
        label="ID Type"
        defaultValue={id.name}
        onChange={this.onIdNameChange}
      />
      <TextField
        label="ID Number"
        defaultValue={id.value || ''}
        onChange={this.onIdValueChange}
      />

      <Typography variant="body2" align="center" style={styles.titles}>
        User Avatar
      </Typography>
      <TextField
        label="Type a avatar link"
        defaultValue={picture.medium}
        margin="normal"
        onChange={this.onPictureChange}
      />
      </FormControl>
      </div>
    );
  }
  // private onChangeInput = (event: any) => {
  //   this.props.user.changeUser(event.target.value);
  // }
  private onFNameChange = (event: any) => {
    this.props.user.changeFName(event.target.value);
  }
  private onLNameChange = (event: any) => {
    this.props.user.changeLName(event.target.value);
  }
  private onTitleChange = (event: any) => {
    this.props.user.changeTitle(event.target.value);
  }
  private onGenderChange = (event: any) => {
    this.props.user.changeGender(event.target.value);
  }
  private onStreetChange = (event: any) => {
    this.props.user.changeStreet(event.target.value);
  }
  private onCityChange = (event: any) => {
    this.props.user.changeCity(event.target.value);
  }
  private onStateChange = (event: any) => {
    this.props.user.changeState(event.target.value);
  }
  private onPostChange = (event: any) => {
    this.props.user.changePost(event.target.value);
  }
  private onEmailChange = (event: any) => {
    this.props.user.changeEmail(event.target.value);
  }
  private onLoginChange = (event: any) => {
    this.props.user.changeLogin(event.target.value);
  }
  private onPasswordChange = (event: any) => {
    this.props.user.changePassword(event.target.value);
  }
  private onDOBChange = (event: any) => {
    this.props.user.changeDOB(event.target.value);
  }
  private onNatChange = (event: any) => {
    this.props.user.changeNat(event.target.value);
  }
  private onRegDateChange = (event: any) => {
    this.props.user.changeRegDate(event.target.value);
  }
  private onPhoneChange = (event: any) => {
    this.props.user.changePhone(event.target.value);
  }
  private onCellChange = (event: any) => {
    this.props.user.changeCell(event.target.value);
  }
  private onIdNameChange = (event: any) => {
    this.props.user.changeIdName(event.target.value);
  }
  private onIdValueChange = (event: any) => {
    this.props.user.changeIdValue(event.target.value);
  }
  private onPictureChange = (event: any) => {
    this.props.user.changePicture(event.target.value);
  }
}

export default observer(UserForm);
