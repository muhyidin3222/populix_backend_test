"use strict"

const { verifyToken } = _lib('jwt')

module.exports = async (req, res) => {
    const { token } = req.headers
    try {
        await verifyToken(token)
    } catch (error) {
        res.status(401).json({
            status: 'Unauthorized',
            statusCode: 401,
            payload: {
                error
            }
        }).end()
    }
}