import { Connection, createConnection, getConnectionOptions } from 'typeorm'
require('dotenv').config()

export default async (): Promise<Connection> => { 
  const defaultOptions = await getConnectionOptions()
  return createConnection( defaultOptions )
}
