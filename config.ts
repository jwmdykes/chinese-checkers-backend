const port = process.env.PORT || 5000;
const ip = process.env.IP || 'localhost';
const host = process.env.HOST || 'localhost';

const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID || 'DUMMYIDEXAMPLE';
const AWS_SECRET_ACCESS_KEY =
  process.env.AWS_SECRET_ACCESS_KEY || 'DUMMYEXAMPLEKEY';

// Set AWS Region
// Create service client module
const AWS = require('aws-sdk');
const AWSaccessKeyId = 'not-important';
const AWSsecretAccessKey = 'not-important';
const AWSregion = 'local';
const AWSendpoint = 'http://localhost:8000'; // This is required
AWS.config.update({
  accessKeyId: AWSaccessKeyId,
  secretAccessKey: AWSsecretAccessKey,
  region: AWSregion,
  endpoint: AWSendpoint,
});

const ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

module.exports = {
  port: port,
  ip: ip,
  host: host,
  AWS_ACCESS_KEY_ID: AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY: AWS_SECRET_ACCESS_KEY,
  ddb: ddb,
};

export {};
