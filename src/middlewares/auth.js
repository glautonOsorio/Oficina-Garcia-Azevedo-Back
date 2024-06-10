const { config } = require("dotenv")
const { verify } = require("jsonwebtoken")

async function auth(req, res, next) {
    try {

        const { authorization } = req.headers
        req['payload'] = verify(authorization, process.env.JWT_SECRET)
        next()
    } catch (error) {
        return res.status(401).json({
            message: "Authentication Failed"
        })
    }
}

module.exports = { auth }