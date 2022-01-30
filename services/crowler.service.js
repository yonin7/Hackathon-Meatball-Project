const Puppeteer = require('Puppeteer');

const scanWebsite = async (url) => {
  try {
    const scanResult = await Puppeteer.scan(url);
    logger.info(`successfully scan website: ${url}`);
    return scanResult;
  } catch (err) {
    logger.error(`Failed scan website: ${url}. error: ${err.message}`);
    return null;
  }
};

export { scanWebsite };
