const config = require('../config');

const winston = require('winston')(config.logger);

const info = (message) => {
  winston.info(message);
};

const warn = (message) => {
  winston.warn(message);
};

const error = (message) => {
  winston.error(message);
};

export { info, warn, error };
