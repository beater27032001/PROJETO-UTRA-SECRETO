import { Request, Response } from "express"
import { getCustomRepository } from "typeorm"
import { AnimesRepository } from "../repositories/AnimesRepository"
import { TitlesRepository } from "../repositories/TitlesRepository"

class AnimesController {

    async create(request: Request, response: Response) {
        // const { titles, description, launch_year, age_limit } = request.body
        const animesToCreate = request.body;

        const animesRepository = getCustomRepository(AnimesRepository)
        const titlesRepository = getCustomRepository(TitlesRepository)

        async function createAnime(animeToCreate) {
            const { titles, description, launch_year, age_limit, path } = animeToCreate;
            
            // Salva na tabela anime
            const anime = animesRepository.create({
                titles,
                description,
                launch_year,
                age_limit,
                path,
            })
            await animesRepository.save(anime)
            console.log(anime)

            // Salva na tabela title
            await titles.forEach(title => {
                const createdTitle = titlesRepository.create({
                    title,
                    anime
                })
                titlesRepository.save(createdTitle)
            });
        }

        animesToCreate.forEach(animeToCreate => {
            createAnime(animeToCreate);
        });

        return response.status(200)
    }

    async search(request: Request, response: Response) {
        
        const { animeMovieQuery } = request.query // Input do usuário vem aqui
        const animeMovieName = animeMovieQuery.toString()
        console.log("animeMovieQuery: " + animeMovieQuery)

        const animesRepository = getCustomRepository(AnimesRepository)
        const titlesRepository = getCustomRepository(TitlesRepository)
        const animes =  await animesRepository.find()
        const titles = await titlesRepository.find()
        
        var searchedAnimes = []

        titles.forEach(title => {
        
            if ( title.title.includes(animeMovieName) ) {
                
                var animeAlreadyAdded = false 
                console.log("Title atual: " + title.title)
                console.log("Anime id atual: " + title.anime.id)
                searchedAnimes.forEach(searchedAnime => {
                    if ( searchedAnime.anime.id == title.anime.id ) {
                        console.log("Title atual: " + title.title)
                        animeAlreadyAdded = true
                    }
                });

                if ( !animeAlreadyAdded ) {
                    searchedAnimes.push({anime: title.anime, title: title.title})
                    animeAlreadyAdded = false
                }
            }
        });

        // SELECT * 
        // FROM animeflix.animes AS A, animeflix.titles AS T 
        // WHERE A.id = T.animeIdId;

        // titles eh um array
        // const animes = await animesRepository.find({
        //     titles: animeMovieName
        // })
        
        // animes.forEach(anime => {
        //     console.log("anime atual: " + anime.titles)
        //     const titles = anime.titles
            
        //     // titles.forEach(title => {
        //     //     if (title.title.includes(animeMovieName)) {
        //     //         // Se a substring aparecer 2 vezes em titulos diferentes, 
        //     //         // vai retornar 2 ou mais animes iguais; como corrigir?
        //     //         searchedAnimes.push(anime);
        //     //         break; // break n funciona dentro de forEach
        //     //     }
        //     // });
            
        //     titles.some(title => {
        //         if (title.title.includes(animeMovieName)) {
        //             searchedAnimes.push(anime);
        //             return true
        //         }

        //         return false
        //     })
        // });
        
        // console.log("erro: \n")
        // return response.json(animes)
        //return response.send({message: "teste"})
        return response.json(searchedAnimes)
    }
}

export { AnimesController }