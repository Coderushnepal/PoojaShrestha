import Boom from '@hapi/boom';

import Car from '../models/Car.js';
import logger from '../utils/logger.js';
import CarImage from '../models/CarImage.js';

export async function getAllCars(query) {
    
	console.log('here', query.manufacturerId);
	const manufacturerFilter = query.manufacturerId;
	const modelFilter = query.model? query.model.split(',') : [];

	logger.info('Fetching a list of all cars');
	const cars = await new Car().getAllCars();

	const parsedCars = cars.map(car => ({
		...car,
		images: car.images ? car.images.split(',') : []
	}));

	let filteredCars = parsedCars;


	if(manufacturerFilter) {
		filteredCars = parsedCars.filter((car) => +manufacturerFilter === car.manufacturerId);
	} 

	if(modelFilter.length) {
		filteredCars = filteredCars.filter((car) => modelFilter.includes(car.model) );
	} 

	return {
		message: 'List of Cars',
		data: filteredCars,
	};
}

export async function getCar(id) {
	logger.info(`Fetching a car with carId ${id}`);
	const car = await new Car().getCarDetails(id);

	if(!car) {
		logger.error(`Cannot find car with carId ${id}`);

		throw new Boom.notFound(`Cannot find car with carId ${id}`);
	}

	const parsedCar = {
		...car,
		images: car.images ? car.images.split(',') : []
	}

	return {
		message: 'Details of Car:',
		data: parsedCar
	};
}

export async function addCar(params) {
	logger.info('Payload received', params);

	const carTableInsertParams = {
		manufacturerId: params.manufacturerId,
		model: params.model,
		horsepower: params.horsepower
	};

	logger.info('Checking if the data already exists');

	const existingData = await new Car().findByParams(carTableInsertParams);

	if(existingData){
		logger.error('Data with same payload already exists');

		throw new Boom.badRequest('Data with same payload already exists');
	}

	logger.info('Saving the new car data');

	const [carTableInsertedData] = await new Car().save(carTableInsertParams);

	if(params.images.length) {
		const carImagesInsertData = params.images.map(url => ({
			carId: carTableInsertedData.id,
			imageUrl: url
		}));

		carImagesInsertData.forEach(async insertData => {
			await new CarImage().save(insertData);
		});	
	}

	const data = await new Car().getCarDetails(carTableInsertedData.id)
	
	return{
		data,
		message: 'Added record successfully',
	};
}



export async function updateCar(id, params) {

	logger.info(`Checking the existence of car with id ${id}`);

	const car = await new Car().getById(id);

	if(!car){
		logger.error(`Cannot find car with id ${id}`);

		throw new Boom.notFound(`Cannot find car with id ${id}`);
	}

	logger.info(`Updating the car for car id ${id}`);

	await new Car().updateById(id, {
		manufacturerId: params.manufacturerId,
		model: params.model,
		horsepower: params.horsepower
	});


	//if we want to deal with images, we have two approaches:
	// 1. Using the same update endpoint for car images as well -> Appropriate handler
    // 2. Using a separate endpoint(API) altogether


	if (params.images?.added?.length) {
		params.images.added.forEach(async (url) => {
		await new CarImage().save({ id, imageUrl: url });
		});
	}

	if (params.images?.removed?.length) {
		params.images.removed.forEach(async (url) => {
		await new CarImage().removeByParams({ id, imageUrl: url });
		});
	}

  logger.info(`Fetching the updated data for car id ${id}`);

  const updatedData = await new Car().getCarDetails(id);

	return{
		data: updatedData,
		message: 'Record updated successfully',
	};
}

export async function removeCar(id) {
	logger.info(`Checking if car with id ${id} exists`);
  
	const car = await new Car().getById(id);
  
	if (!car) {
	  logger.error(`Cannot delete car with id ${id} because it doesn't exist`);
  
	  throw new Boom.notFound(`Cannot delete car with id ${id} because it doesn't exist`);
	}
  
	await new CarImage().removeByParams({ carId: id });
	await new Car().removeById(id);
  
	return {
	  message: 'Record removed successfully'
	};
  }

  