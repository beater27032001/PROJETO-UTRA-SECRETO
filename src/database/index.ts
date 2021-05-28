import { createConnection } from 'typeorm'
require('dotenv').config()

createConnection({
  type: "mysql",
  host: process.env.DB_HOST,
  port: 3306,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: "animeflix"
}).then(async (connection) => {
  console.log("Controller call here " + connection)
})
