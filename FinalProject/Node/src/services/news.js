import Boom from '@hapi/boom';

import News from '../models/News.js';
import logger from '../utils/logger.js';


export async function getAllNews(query) {
    
	// console.log('here', query);
	// const categoryFilter = query.categoryId;

	logger.info('Fetching a list of all news');
    
	const news = await new News().getAllNews();

	let filteredNews = news;

	return {
		message: 'List of News',
		data: filteredNews,
	};
}