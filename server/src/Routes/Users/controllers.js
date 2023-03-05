const { User } = require("../../db.js");

const getUser = async (req, res) => {
    try {
        const users = await User.findAll()
        res.send(users)
    } catch (error) {
        throw new Error(error);
    }
}

const postUser = async (req, res) => {
    const { name, lastname, email, password } = req.body
    try {
        const user = await User.create({ name, lastname, email, password })
        res.send(user)
    } catch (error) {
        throw new Error(error);
    }

}

module.exports = {
    getUser,
    postUser
}