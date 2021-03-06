import { Router } from 'express';

import loginSchema from './schema/login.js';
import addPostSchema from './schema/addNews.js';
import addUserSchema from './schema/addUser.js';
import updateUserSchema from './schema/updateUser.js';
import updateNewsSchema from './schema/updateNews.js';
import * as userController from './controllers/user.js';
import addCategorySchema from './schema/addCategory.js';
import * as newsController from './controllers/news.js';
import authenticate from './middlewares/authenticate.js';
import getNewsQuerySchema from './schema/getNewsQuery.js';
import * as categoryController from './controllers/category.js';
import { validateBody, validateQueryParams } from './middlewares/validation.js';

const router = Router();

router.get('/users', userController.getUser);

router.get('/news', validateQueryParams(getNewsQuerySchema), newsController.getNews);

router.get('/category', categoryController.getCategory);

router.get('/category/:categoryIdentifier', categoryController.getEachCategory);

router.get('/news/:newsIdentifier', newsController.getEachNews);

router.get('/users/:userIdentifier', userController.getEachUser);

router.post('/category', validateBody(addCategorySchema), categoryController.addCategory);

router.post('/news', authenticate, validateBody(addPostSchema), newsController.addNews);

router.post('/users', validateBody(addUserSchema), userController.addUser);

router.put('/users/:userIdentifier', validateBody(updateUserSchema), userController.updateUser);

router.put('/news/:newsIdentifier', authenticate, validateBody(updateNewsSchema), newsController.updateNews);

router.delete('/news/:newsIdentifier', newsController.removeNews);

router.post('/login', validateBody(loginSchema), userController.login);

export default router;
