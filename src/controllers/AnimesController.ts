import { Request, Response } from "express"
import { getCustomRepository } from "typeorm"
import { stringify } from "uuid"
import { AnimesRepository } from "../repositories/AnimesRepository"

class AnimesController {

    async create(request: Request, response: Response) {
        // Regras de negócio aqui
    }

    static async search(request: Request, response: Response) {
        // Input do usuário vem aqui
        const { animeMovieName } = request.params

        const animesRepository = getCustomRepository(AnimesRepository)

        const animes = await animesRepository.find({
            titles: animeMovieName
        })

        return response.json(animes)
    }
}

export { AnimesController }