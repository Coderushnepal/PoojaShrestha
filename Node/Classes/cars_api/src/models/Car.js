import DBModel from '../models/DBModel.js';
import getAllCarsQuery from '../db/queries/getAllCars.js';
import getCarDetailsQuery from '../db/queries/getCarDetails.js';

class Car extends DBModel {
  constructor() {
    super('cars');
  }

  getAllCars() {
    return this.query(getAllCarsQuery);
  }

  async getCarDetails(carId) {
    const [details] = await this.query(getCarDetailsQuery, {carId}); //gives the first element of the array

    return details || null;
  }
}

export default Car;
