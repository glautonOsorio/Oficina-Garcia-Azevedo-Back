const User = require("../database/models/User.model")

class UserController {
    async register(req, res) {

        try {
            const { userName, gender, email, cpf, phoneNumber, password } = req.body

            await User.create({
                userName,
                gender,
                email,
                cpf,
                phoneNumber,
                password
            })
            return res.status(201).json({ message: "User registered Successfully" })
        } catch (error) {
            if (error.name == 'SequelizeUniqueConstraintError' || error.name == 'SequelizeDatabaseError') {
                return res.status(400).json({ message: error.message })
            }
            console.log(error)
            return res.status(500).json({ message: "Unable to register." })
        }
    }

    async updateUserData(req, res) {
        try {
            const { userName, gender, email, cpf, phoneNumber } = req.body

            const userId = req.payload.sub

            await User.update({ userName: userName, gender: gender, email: email, cpf: cpf, phoneNumber: phoneNumber }, { where: { id: userId } })

            return res.status(200).json({ message: "User data updated Sucessfully" })
        } catch (error) {
            return res.status(500).json({ message: "There was a problem with your request" })
        }
    }

    async deleteUser(req, res) {
        try {
            const userId = req.payload.sub

            await User.destroy({ where: { id: userId } })
            return res.status(204).json({ message: "User deleted Successfully" })
        } catch (error) {
            return res.status(500).json({ message: "Unable to process." })
        }
    }

    async listOneUser(req, res) {
        try {

            const userId = req.payload.sub

            const user = await User.findByPk(userId)
            console.log(user)
            if (!user) {
                return res.status(404).json({ message: "User not found!" })
            }

            return res.status(200).json({ user: user })
        } catch (error) {
            return res.status(500).json({ message: "Unable to process request." })
        }

    }
}

module.exports = new UserController()