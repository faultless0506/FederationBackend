import { Router } from 'express';
import { 
  getAllNews, 
  getNewsById,
} from '../controllers/newsController';
import { newsImageUpload } from '../config/multerConfig';

const router = Router();

// GET /api/news - получить все новости
router.get('/', getAllNews);

// GET /api/news/:id - получить новость по ID
router.get('/:id', getNewsById);


export default router;