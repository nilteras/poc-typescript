import gamesController from "@/controllers/games-controller";
import { Router } from "express";


const gamesRouter = Router();
gamesRouter.get("/games", gamesController.getGames)
gamesRouter.post("/games")
gamesRouter.put("/games/:id")
gamesRouter.delete("/games/:id")


export default gamesRouter;