import { Router } from "express";
import * as newsController from './controllers/news.js';


const router = Router();

router.get('/', newsController.getNews);

export default router;