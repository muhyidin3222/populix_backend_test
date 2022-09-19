'use strict';

module.exports = () => {
    const controller = _controller('produk')
    const route = require('express').Router()

    route.get('/get', controller.getAll)

    return route
}