import DBModel from "../models/DBModel.js";

class User extends DBModel{
  constructor() {
    super('users');
  }
}


export default User;
