import gamesController from "@/controllers/games-controller";
import { Router } from "express";


const gamesRouter = Router();
gamesRouter.get("/games", gamesController.getGames)
gamesRouter.post("/games", gamesController.postGames)
gamesRouter.put("/games/:id", gamesController.updateGames)
gamesRouter.delete("/games/:id", gamesController.deleteGame)


export default gamesRouter;