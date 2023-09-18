import { Game } from '@/protocols/games-protocol'
import gamesService from '@/service/games-service'
import { Request, Response} from 'express'
import httpStatus from "http-status"

async function getGames(req: Request, res: Response){
    const games = await gamesService.getGames()
    res.send(games)
}
async function postGames(req: Request, res: Response){
    const body = req.body as Game
    const game = await gamesService.postGame(body)

    if (game === null) {
        return res.sendStatus(httpStatus.BAD_REQUEST)
    }

    res.sendStatus(httpStatus.CREATED)
}

async function updateGames(req: Request, res: Response){
    const gameId = parseInt(req.params.id)
    const updatedGame = req.body as Game
   
      const gameUpdate = await gamesService.updateGame(gameId, updatedGame);
      
      if (gameUpdate === null) {
        return res.sendStatus(httpStatus.BAD_REQUEST);
      }
  
      res.send(gameUpdate);
}

async function deleteGame(req: Request, res: Response) {
    const gameId = parseInt(req.params.id)
     const result = await gamesService.deleteGame(gameId)
     if(!result) {
        return res.sendStatus(httpStatus.NOT_FOUND)
     }

     res.sendStatus(httpStatus.NO_CONTENT)
}

const gamesController = { getGames, postGames, updateGames , deleteGame}

export default gamesController