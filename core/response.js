'use strict';

module.exports = (req, res, next) => {

    res.success = (data, statusCode = 200) => {
        res.status(statusCode).json({
            status: 'success',
            statusCode: statusCode,
            payload: data || {}
        });
    }

    res.error = (message, statusCode = 500) => {
        res.status(statusCode).json({
            status: 'error',
            statusCode,
            payload: {
                message
            }
        })
    }

    res.errorClient = (message, statusCode = 400) => {
        res.status(statusCode).json({
            status: 'Client Error',
            statusCode,
            payload: {
                message
            }
        })
    }

    res.notfound = (message) => {
        res.status(404).json({
            status: 'error',
            statusCode: 404,
            payload: {
                message
            }
        });
    }

    res.notAccess = (message) => {
        res.status(403).json({
            status: 'Forbidden',
            statusCode: 403,
            payload: {
                message
            }
        });
    }

    next();
}