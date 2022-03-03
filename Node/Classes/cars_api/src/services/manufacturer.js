import logger from '../utils/logger.js';
import Manufacturer from '../models/manufacturer.js';

/**
 * Get list of manucturers
 *
 * @returns  {Object}
*/

export async function getManufacturers() {
    logger.info("Fetching list of manufacturers");

    const data = await new Manufacturer().getAll();

    return {
        data,
        message: 'List of manufacturers'
    };
}