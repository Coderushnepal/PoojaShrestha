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
		message: 'Details of News:',
		data: news
	};	
}


export async function addNews(params) {

	const newsTableInsertParams = {
		category_id: params.categoryId,
		title: params.title,
		description: params.description,
		is_exclusive: params.isExclusive,
		published_date: params.publishedDate,
		user_id: params.userId
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

export async function updateNews(id, params) {

	logger.info(`Checking the existence of news with id ${id}`);

	const news = await new News().getById(id);

	if(!news){
		logger.error(`Cannot find news with id ${id}`);

		throw new Boom.notFound(`Cannot find news with id ${id}`);
	}

	logger.info(`Updating the news for news id ${id}`);

	await new News().updateById(id, {
		category_id: params.category_id,
		title: params.title,
		description: params.description,
		is_exclusive: params.is_exclusive,
		published_date: params.published_date,
		user_id: params.user_id
	});

  logger.info(`Fetching the updated data for news id ${id}`);

  const updatedData = await new News().getNewsDetails(id);

	return{
		data: updatedData,
		message: 'Record updated successfully',
	};
}

export async function removeNews(id) {
	logger.info(`Checking if news with id ${id} exists`);
  
	const news = await new News().getById(id);
  
	if (!news) {
	  logger.error(`Cannot delete news with id ${id} because it doesn't exist`);
  
	  throw new Boom.notFound(`Cannot delete news with id ${id} because it doesn't exist`);
	}
  
	await new News().removeById(id);
  
	return {
	  message: 'Record removed successfully'
	};
  }
