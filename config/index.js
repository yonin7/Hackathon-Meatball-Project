require('dotenv').config();

// export const logger = require('./logger'); ////
const mongoDBUrl = process.env.MONGO_URI;

module.exports = { mongoDBUrl };
