'use strict'

require('dotenv').config()

const setup = require('./setup')
const speedTest = require('./jobs/speed-test')

setup().then(() => {
  speedTest.start()
})
