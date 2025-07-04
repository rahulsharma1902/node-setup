// const { isEmpty } = require('./utils');

// HTTP Error messages
const HTTP_ERRORS = {
    ERROR_400: 'Bad Request',
    ERROR_401: 'Unauthorized',
    ERROR_403: 'Forbidden',
    ERROR_404: 'Not Found',
    ERROR_500: 'Internal Server Error',
    GENERAL_ERROR: 'General error',
};

// Simple Error Handler class
class ErrorHandler extends Error {
    constructor(statusCode, customMsg = '') {
        super();
        this.statusCode = statusCode || 500;
        this.message = customMsg || getErrorDesc(statusCode);
    }
}

// Get error message based on the status code
function getErrorDesc(statusCode) {
    switch (statusCode) {
        case 400:
            return HTTP_ERRORS.ERROR_400;
        case 401:
            return HTTP_ERRORS.ERROR_401;
        case 403:
            return HTTP_ERRORS.ERROR_403;
        case 404:
            return HTTP_ERRORS.ERROR_404;
        case 500:
            return HTTP_ERRORS.ERROR_500;
        default:
            return HTTP_ERRORS.GENERAL_ERROR;
    }
}

module.exports = {
    HTTP_ERRORS,
    ErrorHandler
};
