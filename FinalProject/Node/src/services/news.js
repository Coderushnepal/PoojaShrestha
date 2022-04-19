import Boom from '@hapi/boom';
import { request, response } from 'express';

import News from '../models/News.js';
import logger from '../utils/logger.js';

export async function getAllNews() {
  // const pageFilter = query.page;
  // const limitFilter = query.limit;

  logger.info('Fetching a list of all news');

  const news = await new News().getAllNews();
  // console.log('qudfdsfery', request.query);4
  // let {page, size} = query;
  // if(!page) {
  // 	page = 1
  // }
  // if(!size) {
  // 	size=4
  // }

  // const limit = parseInt(size);
  // // const offset  = page-1 * size;

  // if(pageFilter) {
  // 	const filteredNews = news.filter((news) => +pageFilter);
  // }

  return {
    message: 'List of News',
    data: news,
  };
}

export async function getEachNews(id) {
  logger.info(`Fetching news with id ${id}`);
  const news = await new News().getNewsDetails(id);

  if (!news) {
    logger.error(`Cannot find news with newsId ${id}`);

    throw new Boom.notFound(`Cannot find news with newsId ${id}`);
  }

  return {
    message: 'Details of News:',
    data: news,
  };
}

export async function addNews(params) {
  const newsTableInsertParams = {
    category_id: params.categoryId,
    title: params.title,
    description: params.description,
    is_exclusive: params.isExclusive,
    published_date: params.publishedDate,
    user_id: params.userId,
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

  const data = await new News().getNewsDetails(newsTableInsertedParams.id);

  return {
    data,
    message: 'Added record successfully',
  };
}

export async function updateNews(id, params) {
  logger.info(`Checking the existence of news with id ${id}`);
  console.log(params);

  const news = await new News().getById(id);

  if (!news) {
    logger.error(`Cannot find news with id ${id}`);

    throw new Boom.notFound(`Cannot find news with id ${id}`);
  }

  logger.info(`Updating the news for news id ${id}`);

  await new News().updateById(id, {
    title: params.title,
    description: params.description,
    is_exclusive: params.isExclusive,
  });

  logger.info(`Fetching the updated data for news id ${id}`);

  const updatedData = await new News().getNewsDetails(id);

  return {
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
    message: 'Record removed successfully',
  };
}
