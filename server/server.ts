import express from 'express'
import * as Path from 'node:path'
//import nodemailer, { SendMailOptions, SentMessageInfo } from 'nodemailer'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'

import fruitRoutes from './routes/fruits.ts'

// Load environment variables from .env file
dotenv.config()

const server = express()

server.use(express.json())
server.use(bodyParser.json())
server.use(cors())

server.use('/api/v1/fruits', fruitRoutes)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
