import { db } from "@/database/database";
import { CreateGame, Game } from "@/protocols/games-protocol";

async function getGamesDB() {
    const resultGames = await db.query<Game[]>(`SELECT * FROM games`);
    return resultGames.rows;
}


async function findGameDB(game: CreateGame) {
    return await db.query<Game>(`SELECT * FROM games WHERE title=$1 AND platform=$2`, [game.title, game.platform]);
}


async function postGameDB(game: CreateGame) {
    const resultPost = await db.query<CreateGame>(
        `INSERT INTO games (title, platform)
        VALUES ($1, $2)`, [game.title, game.platform]
    )
    return resultPost.rows[0]
}


async function updateGameDB(game: Game): Promise<Game> {
    const resultUpdate = await db.query<Game>(
        `UPDATE games SET title = $1, platform = $2 WHERE id = $3 RETURNING *`,
        [game.title, game.platform, game.id]
    );
    return resultUpdate.rows[0];
}

async function getGameByIdDB(gameId: number): Promise<Game | null> {
    const result = await db.query<Game>(`SELECT * FROM games WHERE id = $1`, [gameId]);
    return result.rows[0] || null;
}

async function deleteGameDB(gameId: number): Promise<boolean> {
    const resultDelete = await db.query(`DELETE FROM games WHERE id = $1`, [gameId]);
    return resultDelete.rowCount > 0;
  }
  

const gamesRepository = { getGamesDB, findGameDB, postGameDB, updateGameDB, getGameByIdDB, deleteGameDB }

export default gamesRepository