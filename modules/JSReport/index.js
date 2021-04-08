'use strict';

const Queue = require('bull');
const fs = require('fs');
const client = require('jsreport-client')('https://jsreport.sealtabs.com/');

const host = '127.0.0.1';
const port = '6379';

const generate_report = new Queue('generatereport', {redis: {host, port}});

(async () => {
  try {
    await generate_report.isReady();
    generate_report.process(async (job) => {
      try {
        const res = await client.render({
          template: {
            shortid: 'BJlwWjEyrO',
          },
          data: job.data,
        });

        const bodyBuffer = await res.body();
        fs.writeFileSync(`${job.data.name}report.pdf`, bodyBuffer);
        return;
      } catch (e) {
        return e;
      }
    });

    generate_report.on('completed', (job, result) => {
      console.log('completed ', result);
    });

    generate_report.on('error', (error) => console.error('Queue Error', error));
  } catch (err) {
    console.log(err);
  }
})();

const report = {
  generate_report,
};

module.exports = report;
