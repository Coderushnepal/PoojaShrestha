import DBModel from '../models/DBModel.js';
// import getUserDetailsQuery from "../db/queries/getUserDetails.js"

class User extends DBModel {
  constructor() {
    super('users');
  }
}

export default User;
