import { Router } from "express";
import cors from 'cors';

import * as newsController from './controllers/news.js';
import * as userController from './controllers/user.js'
import * as categoryController from './controllers/category.js';


const router = Router();

router.get('/', cors(), newsController.getNews);

router.get('/category', cors(), categoryController.getCategory);

router.get('/:carIdentifier', cors(), newsController.getEachNews);


router.get('/users', cors(), userController.getUser);

router.post('/category', cors(), categoryController.addCategory);

router.post('/', cors(), newsController.addNews);

router.post('/users', cors(), userController.addUser);









export default router;