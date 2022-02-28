import Boom from '@hapi/boom';

import Car from '../models/Car.js';
import logger from '../utils/logger.js';

export function getAllCars(query) {
    
	console.log('here', query);
	const manufacturerFilter = query.manufacturer? query.manufacturer.split(',') : [];
	const modelFilter = query.model? query.model.split(',') : [];

	logger.info('Fetching a list of all cars');
	const cars = new Car().getAll();

	let filteredCars = cars;

	if(manufacturerFilter.length) {
		filteredCars = cars.filter((car) => manufacturerFilter.includes(car.manufacturer) );
	} 

	if(modelFilter.length) {
		filteredCars = filteredCars.filter((car) => modelFilter.includes(car.model) );
	} 

	return {
		message: 'List of Cars',
		data: filteredCars,
	};
}

export function getCar(id) {
	logger.info(`Fetching a car with carId ${id}`);
	const car = new Car().getById(id);

	if(!car) {
		logger.error(`Cannot find car with carId ${id}`);

		throw new Boom.notFound(`Cannot find car with carId ${id}`);
	}

	return {
		message: 'Details of Car:',
		data: car
	};
}

export function addCar(params) {
	logger.info(`Payload received ${params}`);

	// const onlyRequiredParams = {
	//     manufacturer: params.manufacturer
	// };

	const existingData = new Car().findByParams(params);

	if(existingData){
		logger.error('Data with same payload already exists');

		throw new Boom.badRequest('Data with same payload already exists');
	}

	logger.info('Saving the new car data');

	const data = new Car().save(params);

	return{
		data,
		message: 'Added record successfully',
	};
}



export function updateCar(id, params) {

	logger.info(`Checking the existence of car with id ${id}`);

	const car = new Car().getById(id);

	if(!car){
		logger.error(`Cannot find car with id ${id}`);

		throw new Boom.notFound(`Cannot find car with id ${id}`);
	}

	logger.info(`Updating the car for car id ${id}`);

	new Car().updateById(id, params);

	logger.info(`Fetching the updated data for id ${id}`);

	const updatedData = new Car().getById(id);

	return{
		data: updatedData,
		message: 'Record updated successfully',
	};
}

export function removeCar(id) {
	logger.info(`Checking if car with carId ${id} exists`);
	const car = new Car().getById(id);

	if(!car){
		logger.error(`Cannot find car with id ${id} to delete`);

		throw new Boom.notFound(`Cannot find car with id ${id} to delete`);
	}

	new Car().removeById(id); //multi to delete all occurrences

	return{
		message: 'Record removed successfully',
	};
}

  