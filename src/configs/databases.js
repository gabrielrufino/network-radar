'use strict'

const { Sequelize } = require('sequelize')
const { DatabaseDrives } = require('../enums/database-drivers')

const {
  LOCAL_DATABASE_PATH,
  EXTERNAL_DATABASE_DRIVER
} = process.env

module.exports = {
  local: new Sequelize({
    dialect: DatabaseDrives.SQLITE,
    storage: LOCAL_DATABASE_PATH
  }),
  external: new Sequelize({
    dialect: DatabaseDrives[EXTERNAL_DATABASE_DRIVER]

  })
}
