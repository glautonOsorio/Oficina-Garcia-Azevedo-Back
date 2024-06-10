const { compare } = require("bcrypt")
const User = require("../database/models/User.model")
const { sign } = require("jsonwebtoken")

class LoginController {

    async login(req, res) {
        try {
            const { email, password } = req.body

            if (!email) { return res.status(400).json({ message: "E-mail is required" }) }
            if (!password) { return res.status(400).json({ message: "Password is required" }) }

            const user = await User.findOne({ where: { email: email } })

            if (!user) { return res.status(404).json({ message: "User not found!" }) }

            const hashPassword = compare(password, user.password)

            if (!hashPassword) return res.status(404).json({ message: "Invalid user or password." })

            const payload = { sub: user.id, email: user.email }
            const token = sign(payload, process.env.JWT_SECRET)

            return res.status(200).json({ Token: token })

        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: "Unable to login." })
        }
    }
}

module.exports = new LoginController()