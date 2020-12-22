const speedTest = require('speedtest-net')
const CronJob = require('cron').CronJob

const db = require('./db')
const { bytesToBits, toMega } = require('./conversor')

const job = new CronJob('0 0 * * * *', function() {
  const startedAt = Date()

  speedTest({
    acceptGdpr: true,
    acceptLicense: true
  })
    .then(result => {
      const finishedAt = Date()

      const speed = {
        download: toMega(bytesToBits(result.download.bandwidth)),
        upload: toMega(bytesToBits(result.upload.bandwidth)),
        startedAt,
        finishedAt
      }
  
      db.get('speeds').push(speed).write()
    })
    .catch(error => console.error(error.message))
}, null, true, 'America/Recife')

job.start()
