import DBModel from "../db/DBModel.js";

class Manufacturers extends DBModel{
  constructor() {
    super('manufacturers');
  }
}

export default Manufacturers;
