import { Router } from 'express';
import { 
  getAllDocuments, 
  getDocumentsByCategory, 
  getDocumentById, 
} from '../controllers/documentController';

const router = Router();

// GET /api/documents - получить все документы
router.get('/', getAllDocuments);

// GET /api/documents/category/:category - получить документы по категории
router.get('/category/:category', getDocumentsByCategory);

// GET /api/documents/:id - получить документ по ID
router.get('/:id', getDocumentById);


export default router;