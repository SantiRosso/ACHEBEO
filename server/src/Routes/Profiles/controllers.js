const { Profile } = require("../../db.js");

const getProfile = async () => {
    try {
        const get = await Profile.findAll()
        return get
    } catch (error) {

    }

}

const postProfile = async (name) => {
    try {
        const post = await Profile.create({ name })
        return post
    } catch (error) {

    }

}

module.exports = {
    getProfile,
    postProfile
}
