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
  
    return {
      insertedData,
      message: 'Added user successfully'
    };
  }





