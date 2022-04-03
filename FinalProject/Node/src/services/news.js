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

export async function getEachNews(id) {
	logger.info(`Fetching news with id ${id}`);
	const news = await new News().getNewsDetails(id);

	if(!news) {
		logger.error(`Cannot find news with newsId ${id}`);

		throw new Boom.notFound(`Cannot find news with newsId ${id}`);
	}

	return {
		message: 'Details of Car:',
		data: news
	};	
}


export async function addNews(params) {

	const newsTableInsertParams = {
		category_id: params.category_id,
		title: params.title,
		description: params.description,
		is_exclusive: params.is_exclusive,
		published_date: params.published_date,
		user_id: params.user_id
	};
	logger.info('Payload received', newsTableInsertParams);

	// logger.info('Checking if the data already exists');

	// const existingData = await new News().findByParams(newsTableInsertParams);

	// if(existingData){
	// 	logger.error('Data with same payload already exists');

	// 	throw new Boom.badRequest('Data with same payload already exists');
	// }

	logger.info('Saving the news data');

	const [newsTableInsertedParams] = await new News().save(newsTableInsertParams);

	const data = await new News().getNewsDetails(newsTableInsertedParams.id)
	
	return{
		data,
		message: 'Added record successfully',
	};
}
