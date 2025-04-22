require('dotenv').config();
console.log(`NODE_ENV: ${process.env.NODE_ENV}`);

const isDevelopment = process.env.NODE_ENV === 'development';
const port = process.env.PORT || 5000;
const ip = process.env.IP || 'localhost';
const host = process.env.HOST || 'localhost';
const key_file = process.env.KEY_FILE || null;
const cert_file = process.env.CERT_FILE || null;
const allowedHost = isDevelopment
  ? 'localhost'
  : 'd19z3ut7mnmgcc.cloudfront.net';
const allowedPort = isDevelopment ? 3000 : 443;

module.exports = {
  isDevelopment: isDevelopment,
  port: port,
  ip: ip,
  host: host,
  key_file: key_file,
  cert_file: cert_file,
  allowedHost: allowedHost,
  allowedPort: allowedPort,
};

export {};
