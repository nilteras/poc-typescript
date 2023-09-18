import { errors } from "@/errors/erros";
import { Game } from "@/protocols/games-protocol";
import gamesRepository from "@/repository/games-repository";

async function getGames() {
    return await gamesRepository.getGamesDB()
}

async function postGame(game: Game) {
    const gameExists = await gamesRepository.findGameDB(game)
    if (gameExists.rowCount > 0) throw errors.conflictError('Jogo existente');

    return await gamesRepository.postGameDB(game);
}

const gamesService = { getGames, postGame }

export default gamesService