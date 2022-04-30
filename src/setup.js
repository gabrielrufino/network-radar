'use strict'

const database = require('./database')

const setup = async () => {
  await database.sync()
}

module.exports = setup
