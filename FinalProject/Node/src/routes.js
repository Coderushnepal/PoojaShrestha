import { Router } from "express";
import * as newsController from './controllers/news.js';
import * as userController from './controllers/user.js'
import * as categoryController from './controllers/category.js';


const router = Router();

router.get('/', newsController.getNews);

router.get('/category', categoryController.getCategory);

router.get('/users', userController.getUser);

router.post('/category', categoryController.addCategory);

router.post('/users', userController.addUser);







export default router;