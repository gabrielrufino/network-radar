'use strict'

const database = require('./configs/databases')

const setup = async () => {
  await database.sync()
}

module.exports = setup
