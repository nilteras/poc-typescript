import { CreateGame } from "@/protocols/games-protocol";
import Joi from "joi";

export const gameSchema = Joi.object<CreateGame>({
    title: Joi.string().required(),
    platform: Joi.string().required()
})