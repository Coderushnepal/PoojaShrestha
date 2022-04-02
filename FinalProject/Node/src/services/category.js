import Boom from '@hapi/boom';
import logger from '../utils/logger.js';
import Category from '../models/Category.js';

/**
 * Get list of Category
 *
 * @returns  {Object}
*/

export async function getAllCategory() {
    logger.info("Fetching list of categories");

    const data = await new Category().getAll();

    return {
        message: 'List of categories:',
        data
    };
}


export async function createCategory(params) {
    const { name, description } = params;
  
    const existingCategory = await new Category().findByParams({ name });
  
    if (existingCategory) {
      logger.error('The category already exists');
  
      throw new Boom.badRequest('The category already exists');
    }
  
  
    const [insertedData] = await new Category().save({ name, description });
  
    return {
      insertedData,
      message: 'Added category successfully'
    };
  }





