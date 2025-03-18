import { Router } from 'express';
import newsRoutes from './newsRoutes';
import competitionRoutes from './competitionsRoutes';
import documentRoutes from './documentsRoutes';

const router = Router();

router.use('/news', newsRoutes);
router.use('/competitions', competitionRoutes);
router.use('/documents', documentRoutes);

export default router;