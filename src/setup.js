'use strict'

const dotenv = require('dotenv')

const database = require('./database')

const setup = async () => {
  dotenv.config()

  await database.sync()
}
