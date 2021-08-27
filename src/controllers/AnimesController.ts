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

    async searchTitle(request: Request, response: Response) {
        
        const { animeMovieQuery } = request.query // Input do usuário vem aqui
        const animeMovieName = animeMovieQuery.toString().toLowerCase();
        console.log("animeMovieQuery: " + animeMovieQuery)

        // const animesRepository = getCustomRepository(AnimesRepository)
        const titlesRepository = getCustomRepository(TitlesRepository)
        // const animes =  await animesRepository.find() // Return all animes
        const titles = await titlesRepository.find() // Return all titles
        
        var searchedAnimes = []

        titles.forEach(title => {
        
            if ( title.title.toLowerCase().includes(animeMovieName.toLowerCase()) ) {
                
                var animeAlreadyAdded = false 
                console.log("Title atual: " + title.title + " | ID: " + title.anime.id);
                searchedAnimes.forEach(searchedAnime => {
                    // if ( searchedAnime.anime.id == title.anime.id ) {
                    //     animeAlreadyAdded = true
                    // }
                    if ( searchedAnime.id == title.anime.id ) {
                        animeAlreadyAdded = true
                    }
                });

                // const testeA = title.anime; // {}
                // const testeB = title.title; // String
                // const testeC = title.anime.episodes; // undefined

                if ( !animeAlreadyAdded ) {
                    // searchedAnimes.push({anime: title.anime, title: title.title})
                    searchedAnimes.push({
                        path: title.anime.path, 
                        id: title.anime.id
                    });
                    animeAlreadyAdded = false
                }
            }
        });

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


    async getEpisodes(request: Request, response: Response) {
        const { animeId } = request.query;

        const animesRepository = getCustomRepository(AnimesRepository);

        // SELECT * 
        // FROM animeflix.animes AS A, animeflix.titles AS T, animeflix.anime_eps as E
        // WHERE A.id = T.animeId and A.id = E.animeIdand T.title = "steins gate";

        const animeQuery = `SELECT title, \`description\`, launch_year, age_limit, \`path\`, seasonsQtd, genres 
        FROM animeflix.animes AS A, animeflix.titles AS T
        WHERE A.id = T.animeId and A.id = ?;`;

        const episodesQuery = `SELECT name, \`description\`, season, \`path\`
        FROM animeflix.anime_eps as E
        WHERE E.animeId = ?;`;

        const anime = await animesRepository.query(animeQuery, [animeId]);
        const episodes = await animesRepository.query(episodesQuery, [animeId]);

        // anime é um array<RowDataPacket> com apenas 1 row retornada
        anime[0].episodes = episodes;

        // console.log(anime);

        return response.json(anime[0]);
    }
}

export { AnimesController }