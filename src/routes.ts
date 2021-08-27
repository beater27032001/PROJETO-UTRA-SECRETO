import express from 'express';
import path from 'path'

import { AnimesController } from './controllers/AnimesController'

const routes = express.Router()

const animesController = new AnimesController()

routes.get('/', (request, response) => 
    response.sendFile(path.join(__dirname, "pages/index.html")))

routes.get('/animes', (request, response) => 
    response.sendFile(path.join(__dirname, "pages/animes.html")))

routes.get('/filmes', (request, response) => 
    response.sendFile(path.join(__dirname, "pages/filmes.html")))

routes.get('/search/', animesController.searchTitle)

routes.get('/episodes/', animesController.getEpisodes)

routes.post('/create/', animesController.create)


export default routes;