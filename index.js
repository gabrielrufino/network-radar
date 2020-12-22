const CronJob = require('cron').CronJob
const speedTest = require('speedtest-net')
const localDevices = require('local-devices')

const db = require('./db')
const { bytesToBits, toMega } = require('./conversor')

const job = new CronJob('0 0 * * * *', function() {
  const startedAt = Date()

  Promise.all([
    speedTest({
      acceptGdpr: true,
      acceptLicense: true
    }),
    localDevices()
  ])
    .then(([result, devices]) => {
      const finishedAt = Date()

      const speed = {
        download: toMega(bytesToBits(result.download.bandwidth)),
        upload: toMega(bytesToBits(result.upload.bandwidth)),
        connected_devices: devices.length,
        startedAt,
        finishedAt
      }
  
      db.get('speeds').push(speed).write()
    })
    .catch(error => console.error(error.message))
}, null, true, 'America/Recife')

job.start()
console.log('Running...')
