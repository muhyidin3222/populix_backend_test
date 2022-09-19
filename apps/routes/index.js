'use strict';

module.exports = () => {
    const router = require('express').Router();
    router.use('/auth', _router('auth')())
    router.use('/produk', _router('produk')())

    return router
}

function _router(name) {
    return require(`./${name}`)
}