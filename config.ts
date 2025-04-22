require('dotenv').config();
console.log(`NODE_ENV: ${process.env.NODE_ENV}`);

const isDevelopment = process.env.NODE_ENV === 'development';
const port = process.env.PORT || 5000;

module.exports = {
  isDevelopment: isDevelopment,
  port: port,
};

export {};
