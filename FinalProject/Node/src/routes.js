import { Router } from "express";
import cors from 'cors';

import * as newsController from './controllers/news.js';
import * as userController from './controllers/user.js'
import * as categoryController from './controllers/category.js';


const router = Router();

router.get('/users', cors(), userController.getUser);

router.get('/', cors(), newsController.getNews);

router.get('/category', cors(), categoryController.getCategory);

router.get('/:newsIdentifier', cors(), newsController.getEachNews);

router.post('/category', cors(), categoryController.addCategory);


router.post('/', cors(), newsController.addNews);


router.post('/users', cors(), userController.addUser);

router.put('/:newsIdentifier', cors(), newsController.updateNews);

router.delete('/:newsIdentifier', cors(), newsController.removeNews);

router.post('/login', cors(), userController.login);











export default router;