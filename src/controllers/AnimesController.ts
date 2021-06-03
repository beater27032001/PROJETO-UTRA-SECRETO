import { Request, Response } from "express"
import { getCustomRepository } from "typeorm"
import { AnimesRepository } from "../repositories/AnimesRepository"

class AnimesController {

    async create(request: Request, response: Response) {
        // Regras de negócio aqui
    }

    async search(request: Request, response: Response) {
        
        const { animeMovieName } = request.params // Input do usuário vem aqui
        console.log("Antes do erro: \n")
        const animesRepository = getCustomRepository(AnimesRepository)
        console.log("Depois do erro: \n")

        const animes =  await animesRepository.find()
        
        var searchedAnimes = []

        // SELECT * 
        // FROM animeflix.animes AS A, animeflix.titles AS T 
        // WHERE A.id = T.animeIdId;

        // titles eh um array
        // const animes = await animesRepository.find({
        //     titles: animeMovieName
        // })

        animes.forEach(anime => {
            const titles = anime.titles

            // titles.forEach(title => {
            //     if (title.title.includes(animeMovieName)) {
            //         // Se a substring aparecer 2 vezes em titulos diferentes, 
            //         // vai retornar 2 ou mais animes iguais; como corrigir?
            //         searchedAnimes.push(anime);
            //         break; // break n funciona dentro de forEach
            //     }
            // });
            
            titles.some(title => {
                if (title.title.includes(animeMovieName)) {
                    searchedAnimes.push(anime);
                    return true
                }

                return false
            })
        });
        

        return response.json(animes)
        // return response.json(searchedAnimes)
    }
}

export { AnimesController }