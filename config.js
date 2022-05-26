const port = process.env.PORT || 5000;
const ip = process.env.IP || 'localhost';
const host = process.env.HOST || 'localhost';

const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID || 'DUMMYIDEXAMPLE';
const AWS_SECRET_ACCESS_KEY =
  process.env.AWS_SECRET_ACCESS_KEY || 'DUMMYEXAMPLEKEY';

module.exports = {
  port: port,
  ip: ip,
  host: host,
  AWS_ACCESS_KEY_ID: AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY: AWS_SECRET_ACCESS_KEY,
};
