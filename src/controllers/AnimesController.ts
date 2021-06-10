import { Request, Response } from "express"
import { getCustomRepository } from "typeorm"
import { AnimesRepository } from "../repositories/AnimesRepository"

class AnimesController {

    async create(request: Request, response: Response) {
        const animesRepository = getCustomRepository(AnimesRepository)

        const anime = {
            titles: [{ title: "steins::gate" }],
            description: "el psy congroo",
            launch_year: 2010
        }

        const animes =  await animesRepository.insert(anime)
    }

    async search(request: Request, response: Response) {
        
        const { animeMovieQuery } = request.query // Input do usuário vem aqui
        const animeMovieName = animeMovieQuery.toString()
        console.log("animeMovieQuery: " + animeMovieQuery)
        const animesRepository = getCustomRepository(AnimesRepository)
        console.log("erro: \n")
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
        
        console.log("erro: \n")
        return response.json(animes)
        //return response.send({message: "teste"})
        // return response.json(searchedAnimes)
    }
}

export { AnimesController }