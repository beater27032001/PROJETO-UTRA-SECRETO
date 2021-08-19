import 'reflect-metadata'
import express from 'express'
//import cors from 'cors'

import createConnection from "./database"
import routes from './routes'

const app = express();

//app.use(cors());
createConnection()
app.use('/', express.static(__dirname))
app.use(express.json())
app.use(routes)

app.listen(3333, () => console.log("Server is running!"))
