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
        const userDb = await User.findOne({
            where: {
                email,
            }
        })
        if (userDb) {
            throw new Error('This email is already used');
        }
        const user = await User.create({ name, lastname, email, password })
        res.send(user)
    } catch (error) {
        res.status(400).send(error.message)
    }

}

module.exports = {
    getUser,
    postUser
}