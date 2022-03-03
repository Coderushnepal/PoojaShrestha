import Boom from '@hapi/boom';

import Car from '../models/Car.js';
import logger from '../utils/logger.js';

export async function getAllCars(query) {
    
	console.log('here', query);
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
	logger.info('Checking if the data already exists... about to....');

	if(existingData){
		logger.error('Data with same payload already exists');

		throw new Boom.badRequest('Data with same payload already exists');
	}

	logger.info('Saving the new car data');

	const [data] = await new Car().save(params);

	// if(params.images.length) {
	// 	const carImagesInsertData = params.images.map(url => ({
	// 		carId: data.id,
	// 		imageUrl: url
	// 	}));

	// 	const [imagesData] = await
	// }
	
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

  