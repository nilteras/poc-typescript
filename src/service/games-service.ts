import { errors } from "@/errors/erros";
import { Game } from "@/protocols/games-protocol";
import gamesRepository from "@/repository/games-repository";

async function getGames() {
    return await gamesRepository.getGamesDB()
}

async function postGame(game: Game) {
    const gameExists = await gamesRepository.findGameDB(game)
    if (gameExists.rowCount > 0) throw errors.conflictError('Jogo');

    return await gamesRepository.postGameDB(game);
}

async function updateGame(gameId: number, updateGame: Game): Promise<Game | null> {
    const gameExists = await gamesRepository.getGameByIdDB(gameId)
    if(!gameExists) throw errors.notFound('Nome do Jogo')

    gameExists.title = updateGame.title;
    gameExists.platform = updateGame.platform;

    return await gamesRepository.updateGameDB(gameExists)
}

const gamesService = { getGames, postGame, updateGame }

export default gamesService