import gamesController from "@/controllers/games-controller";
import { validationschema } from "@/middlewares/validation-schema";
import { gameSchema } from "@/schemas/games-schema";
import { Router } from "express";


const gamesRouter = Router();
gamesRouter.get("/games", gamesController.getGames)
gamesRouter.post("/games", validationschema(gameSchema), gamesController.postGames)
gamesRouter.put("/games/:id",validationschema(gameSchema), gamesController.updateGames)
gamesRouter.delete("/games/:id", gamesController.deleteGame)


export default gamesRouter;