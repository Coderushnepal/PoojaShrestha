import DBModel from '../db/DBModel.js'

class Car extends DBModel {
  constructor() {
    super('cars');
  }
}

export default Car;
