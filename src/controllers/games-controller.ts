import { Game } from '@/protocols/games-protocol'
import gamesService from '@/service/games-service'
import { Request, Response} from 'express'
import httpStatus from "http-status";

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

const gamesController = { getGames, postGames }

export default gamesController