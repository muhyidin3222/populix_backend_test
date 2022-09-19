'use strict';

module.exports = () => {
    const controller = _controller('auth')
    const route = require('express').Router()

    route.post('/login', controller.login)
    
    return route
}