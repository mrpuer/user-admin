import {Input, InputLabel, MenuItem, Select, TextField} from "material-ui";
import { observer } from "mobx-react";
import * as React from "react";
import { IUser } from "./Interfaces";

class UserEdit extends React.Component<IUser, {}> {
  public render() {
    const {name, nat, email, gender, location, login, dob, registered, phone, cell, id, picture} = this.props.user;
    return (
      <div className="user-edit">
      <InputLabel htmlFor="gender">Gender</InputLabel>
      <Select
        fullWidth={true}
        margin="dense"
        value={gender}
        onChange={this.onGenderChange}
        input={<Input name="gender" id="gender" />}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value="male">Male</MenuItem>
        <MenuItem value="female">Female</MenuItem>
      </Select>

      <Select
        value={name.title}
        margin="dense"
        onChange={this.onTitleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value="mr">Mr</MenuItem>
        <MenuItem value="monsieur">Monsieur</MenuItem>
        <MenuItem value="ms">Ms</MenuItem>
        <MenuItem value="mrs">Mrs</MenuItem>
        <MenuItem value="miss">Miss</MenuItem>
      </Select>

      <TextField
        label="User First Name"
        defaultValue={name.first}
        margin="dense"
        onChange={this.onFNameChange}
      />

      <TextField
        label="User Last Name"
        defaultValue={name.last}
        margin="dense"
        onChange={this.onLNameChange}
      />

      <TextField
        label="User Email Address"
        defaultValue={email}
        fullWidth={true}
        margin="dense"
        onChange={this.onEmailChange}
      />

      <TextField
        label="User Nationality"
        defaultValue={nat}
        fullWidth={true}
        margin="dense"
        onChange={this.onNatChange}
      />

      <InputLabel htmlFor="location">User Location</InputLabel>
      <TextField
        label="Street"
        defaultValue={location.street}
        fullWidth={true}
        margin="dense"
        onChange={this.onStreetChange}
      />
      <TextField
        label="City"
        defaultValue={location.city}
        fullWidth={true}
        margin="dense"
        onChange={this.onCityChange}
      />
      <TextField
        label="State"
        defaultValue={location.state}
        fullWidth={true}
        margin="dense"
        onChange={this.onStateChange}
      />
      <TextField
        label="Post Code"
        defaultValue={location.postcode}
        fullWidth={true}
        margin="dense"
        onChange={this.onPostChange}
      />

      <InputLabel htmlFor="login">User Login Info</InputLabel>
      <TextField
        label="Username"
        defaultValue={login.username}
        fullWidth={true}
        margin="dense"
        onChange={this.onLoginChange}
      />
      <TextField
        label="Password"
        defaultValue={login.password}
        fullWidth={true}
        margin="dense"
        type="password"
        onChange={this.onPasswordChange}
      />
      <InputLabel htmlFor="login">User Date of Birth</InputLabel>
      <TextField
        id="date"
        label="Birthday"
        type="date"
        defaultValue={dob}
        InputLabelProps={{shrink: true}}
        onChange={this.onDOBChange}
      />
      <InputLabel htmlFor="login">Register Date</InputLabel>
      <TextField
        id="regDate"
        label="Register Date"
        type="date"
        defaultValue={registered}
        InputLabelProps={{shrink: true}}
        onChange={this.onRegDateChange}
      />
      <TextField
        label="Phone Number"
        defaultValue={phone}
        fullWidth={true}
        margin="dense"
        onChange={this.onPhoneChange}
      />
      <TextField
        label="Cell Number"
        defaultValue={cell}
        fullWidth={true}
        margin="dense"
        onChange={this.onCellChange}
      />
      <TextField
        label="ID"
        defaultValue={id.name}
        fullWidth={true}
        margin="dense"
        onChange={this.onIdNameChange}
      />
      <TextField
        label="ID Number"
        defaultValue={id.value}
        fullWidth={true}
        margin="dense"
        onChange={this.onIdValueChange}
      />
      <TextField
        label="User Picture"
        defaultValue={picture.medium}
        fullWidth={true}
        margin="dense"
        onChange={this.onPictureChange}
      />
      </div>
    );
  }
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

export default observer(UserEdit);
