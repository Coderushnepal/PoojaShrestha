import Boom from '@hapi/boom';

import User from '../models/User.js';
import logger from '../utils/logger.js';
import { hash, compare, createToken } from '../utils/crypt.js';

// get user

export async function getAllUser() {
    logger.info("Fetching list of users");

    const data = await new User().getAll();

    return {
        message: 'List of users:',
        data
    };
}

export async function getEachUser(id) {
	logger.info(`Fetching user with id ${id}`);
	const user = await new User().getById(id);

	if(!user) {
		logger.error(`Cannot find user with userId ${id}`);

		throw new Boom.notFound(`Cannot find user with userId ${id}`);
	}

	return {
		message: 'Details of User:',
		data: user
	};	
}

// Creating new user

export async function createUser(params) {
    const { name, email, password, is_admin } = params;
  
    const existingUser = await new User().findByParams({ email });
  
    if (existingUser) {
      logger.error('The email address is already taken');
  
      throw new Boom.badRequest('The email address is already taken');
    }
  
    const hashedPassword = hash(password);
  
    const [insertedData] = await new User().save({ name, email, password: hashedPassword, is_admin });
    console.log(insertedData);
  
    return {
      insertedData,
      message: 'Added user successfully'
    };
}


export async function updateUser(id, params) {

	logger.info(`Checking the existence of user with id ${id}`);

	const user = await new User().getById(id);

	if(!user){
		logger.error(`Cannot find user with id ${id}`);

		throw new Boom.notFound(`Cannot find user with id ${id}`);
	}

	logger.info(`Updating the user for user id ${id}`);

	await new User().updateById(id, {
		name: params.name,
		email: params.email,
		password: params.password,
	});

  logger.info(`Fetching the updated data for user id ${id}`);

  const updatedData = await new User().getById(id);

	return{
		data: updatedData,
		message: 'Record updated successfully',
	};
}

export async function removeUser(id) {
	logger.info(`Checking if user with id ${id} exists`);
  
	const user = await new User().getById(id);
  
	if (!user) {
	  logger.error(`Cannot delete user with id ${id} because it doesn't exist`);
  
	  throw new Boom.notFound(`Cannot delete user with id ${id} because it doesn't exist`);
	}
  
	await new User().removeById(id);
  
	return {
	  message: 'Record removed successfully'
	};
  }


export async function login(params) {
  const {email, password } = params;

  const existingUser = await new User().findByParams({ email });

  if (!existingUser) {
    logger.error('Invalid credentials: Could not find the associated email');

    throw new Boom.badRequest('Invalid credentials');
  }

  const doesPasswordMatch = compare(password, existingUser.password);

  if (!doesPasswordMatch) {
    logger.error('Invalid credentials: Password does not match');

    throw new Boom.badRequest('Invalid credentials');
  }

  const user = {
    id: existingUser.id,
    email: existingUser.email
  };

  const token = createToken(user);

  return {
    data: { token, user},
    message: 'Logged in succesfully'
  };
}

  




