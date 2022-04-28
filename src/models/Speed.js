'use strict'

const { DataTypes } = require('sequelize')

const database = require('../database')

const Speed = database.define('Speed', {
  download: DataTypes.NUMBER,
  upload: DataTypes.NUMBER,
  connected_devices: DataTypes.INTEGER,
  started_at: DataTypes.DATE,
  finished_at: DataTypes.DATE
})

module.exports = Speed
