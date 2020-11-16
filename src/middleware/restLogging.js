var mung = require('express-mung');
import UtilServices from '../services/util.service';
import logger from '../utils/logger';

const requestStart = Date.now();

export default mung.json(
    function transform(body, request, response) {
        const { rawHeaders, httpVersion, method, socket, baseUrl } = request;
        const { remoteAddress, remoteFamily } = socket;

        const { statusCode, statusMessage } = response;
        const responseHeaders = response.getHeaders();
        let errorMessage = null;
        let userId = '';

        userId = body && body.token
            ? UtilServices.decodeHash(body.token)
            : UtilServices.decodeHash(request.headers.authorization);

        if (response.statusCode >= 400) {
            errorMessage = body;
            logger.error(
                JSON.stringify({
                    timestamp: Date.now(),
                    processingTime: Date.now() - requestStart,
                    rawHeaders,
                    errorMessage,
                    httpVersion,
                    method,
                    remoteAddress,
                    remoteFamily,
                    baseUrl,
                    response: {
                        statusCode,
                        statusMessage,
                        headers: responseHeaders,
                        body: ''
                    },
                    UserId: userId
                })
            );
        } else {
            logger.info(
                JSON.stringify({
                    timestamp: Date.now(),
                    processingTime: Date.now() - requestStart,
                    rawHeaders,
                    errorMessage,
                    httpVersion,
                    method,
                    remoteAddress,
                    remoteFamily,
                    baseUrl,
                    response: {
                        statusCode,
                        statusMessage,
                        headers: responseHeaders,
                        body: body
                    },
                    UserId: userId
                })
            );
        }
    },
    {
        mungError: true
    }
)