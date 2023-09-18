import { Router } from "express";
import gamesRouter from "./games-router";


const router = Router();
router.use(gamesRouter)


export default router;