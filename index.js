const speedTest = require('speedtest-net');
 
(async () => {
  try {
    const result = await speedTest({
      acceptGdpr: true,
      acceptLicense: true
    });

    console.log(result)
  } catch (err) {
    console.log(err.message);
  } finally {
    process.exit(0);
  }
})();
