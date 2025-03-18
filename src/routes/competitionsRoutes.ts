import { Router } from "express";
import {
  getAllCompetitions,
  getCompetitionById,
} from "../controllers/competitionsController";

const router = Router();

// GET /api/competitions - получить все соревнования
router.get("/", getAllCompetitions);

// GET /api/competitions/:id - получить соревнование по ID
router.get("/:id", getCompetitionById);

export default router;
