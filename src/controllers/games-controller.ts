import gamesService from '@/service/games-service'
import { Request, Response} from 'express'

async function getGames(req: Request, res: Response){
    const games = await gamesService.getGames()
    res.send(games)
}

const gamesController = { getGames }

export default gamesController