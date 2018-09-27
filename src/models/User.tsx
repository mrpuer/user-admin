import crypto = require('crypto');
import { getParent, types } from 'mobx-state-tree';

interface IInputEvent {
  value: string;
  name: string;
}

const UserName = types.model({
  first: '',
  last: '',
  title: types.optional(types.enumeration('title', ['mr',
    'ms',
    'miss',
    'monsieur',
    'mrs',
    '',
    'madame',
    'mademoiselle',
  ]), ''),
});

const UserId = types.model({
  name: '',
  value: types.maybe(types.union(types.number, types.string)),
});

const UserLocation = types.model({
  city: '',
  postcode: types.optional(types.union(types.number, types.string), ''),
  state: '',
  street: '',
});

const UserLogin = types.model({
  md5: '',
  password: '',
  salt: '',
  sha1: '',
  sha256: '',
  username: '',
});

const UserPicture = types.model({
  large: '',
  medium: '',
  thumbnail: '',
});

export const User = types.model({
  cell: '',
  dob: '1945-05-09',
  email: '',
  gender: types.optional(types.enumeration('gender', ['male', 'female', '']), ''),
  id: types.optional(UserId, {}),
  location: types.optional(UserLocation, {}),
  login: types.optional(UserLogin, {}),
  name: types.optional(UserName, {}),
  nat: '',
  phone: '',
  picture: types.optional(UserPicture, {}),
  registered: '1945-05-09',
  showDeleteDialog: false,
  showEditDialog: false,
}).actions(((self) => ({
  changeFName(newName: string) {
    self.name.first = newName;
  },
  changeLName(newName: string) {
    self.name.last = newName;
  },
  changeTitle(event: 'mr' | 'ms' | 'miss' | 'monsieur' | 'mrs' | '' | 'madame' | 'mademoiselle') {
    self.name.title = event;
  },
  changeGender(newGender: 'male' | 'female' | '') {
    self.gender = newGender;
  },
  changeStreet(newStreet: string) {
    self.location.street = newStreet;
  },
  changeCity(newCity: string) {
    self.location.city = newCity;
  },
  changeState(newState: string) {
    self.location.state = newState;
  },
  changePost(newPost: string | number) {
    self.location.postcode = newPost;
  },
  changeLogin(newLogin: string) {
    self.login.username = newLogin;
  },
  changePassword(newPass: string) {
    const salt = crypto.randomBytes(Math.ceil(8)).toString('hex').slice(0, 8);
    self.login.password = newPass;
    self.login.salt = salt;
    self.login.md5 = crypto.createHmac('md5', salt).update(newPass).digest('hex');
    self.login.sha1 = crypto.createHmac('sha1', salt).update(newPass).digest('hex');
    self.login.sha256 = crypto.createHmac('sha256', salt).update(newPass).digest('hex');
  },
  changeDOB(newDob: string) {
    self.dob = newDob;
  },
  changeEmail(newEmail: string) {
    self.email = newEmail;
  },
  changeNat(newNat: string) {
    self.nat = newNat;
  },
  changeRegDate(newRegDate: string) {
    self.registered = newRegDate;
  },
  changePhone(newPhone: string) {
    self.phone = newPhone;
  },
  changeCell(newCell: string) {
    self.cell = newCell;
  },
  changeIdName(newId: string) {
    self.id.name = newId;
  },
  changeIdValue(newIdVal: any) {
    self.id.value = newIdVal;
  },
  changePicture(newPic: any) {
    self.picture.large = newPic;
    self.picture.medium = newPic;
    self.picture.thumbnail = newPic;
  },
  remove() {
    getParent(self, 2).remove(self);
  },
  switchDeleteDialog() {
    self.showDeleteDialog = !self.showDeleteDialog;
  },
  switchEditDialog() {
    self.showEditDialog = !self.showEditDialog;
  },
})));
