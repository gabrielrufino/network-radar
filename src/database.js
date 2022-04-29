'use strict'

const { Sequelize } = require('sequelize')

const { DATABASE_TYPE, DATABASE_URL } = process.env

module.exports = new Sequelize({
  dialect: DATABASE_TYPE,
  storage: DATABASE_URL
})
