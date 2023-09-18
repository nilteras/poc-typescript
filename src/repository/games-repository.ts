import { db } from "@/database/database";
import { Game } from "@/protocols/games-protocol";

async function getGamesDB() {
    const resultGames = await db.query<Game[]>(`SELECT * FROM games`);
    return resultGames.rows;
  }

const gamesRepository = { getGamesDB } 

export default gamesRepository