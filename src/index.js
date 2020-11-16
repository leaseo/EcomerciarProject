require("babel-polyfill")

import app from './app';
import logger from './utils/logger';

function main() {
    app.listen(process.env.PORT || 3000);
    console.log('Server on port 3000');
    logger.info('Server on port 3000');
};

main();