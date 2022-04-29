'use strict'

const { CronJob } = require('cron')
const dotenv = require('dotenv')
const localDevices = require('local-devices')
const speedTest = require('speedtest-net')

const { bytesToBits, toMega } = require('./helpers/conversor')
const Speed = require('./models/Speed')
const database = require('./database')

dotenv.config()

const job = new CronJob('* * * * * *', function () {
  const startedAt = new Date().toLocaleString()

  Promise.all([
    speedTest({
      acceptGdpr: true,
      acceptLicense: true
    }),
    localDevices()
  ])
    .then(async ([result, devices]) => {
      const finishedAt = new Date().toLocaleString()

      const speed = {
        download: toMega(bytesToBits(result.download.bandwidth)),
        upload: toMega(bytesToBits(result.upload.bandwidth)),
        connected_devices: devices.length,
        started_at: startedAt,
        finished_at: finishedAt
      }

      await Speed.create(speed)
    })
    .catch(error => console.error(error.message))
}, null, true, 'America/Recife')

database.sync().then(() => {
  job.start()
})
console.log('Running...')
