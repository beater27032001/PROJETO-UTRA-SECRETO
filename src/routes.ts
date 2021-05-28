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

routes.get('', (request, response) => AnimesController.search(request, response))

// yarn typeorm migration:run <--- parei aqui

export default routes;