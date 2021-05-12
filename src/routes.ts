import express from 'express';
import path from 'path'


const routes = express.Router();

routes.get('/', (request, response) => 
    response.sendFile(path.join(__dirname, "pages/index.html")) 
)

routes.get('/animes', (request, response) => 
    response.sendFile(path.join(__dirname, "pages/animes.html")) 
)

routes.get('/filmes', (request, response) => 
    response.sendFile(path.join(__dirname, "pages/filmes.html")) 
)


export default routes;