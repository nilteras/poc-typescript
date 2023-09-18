import gamesRepository from "@/repository/games-repository";

async function getGames(){
    return await gamesRepository.getGamesDB()
}

const gamesService = { getGames }

export default gamesService