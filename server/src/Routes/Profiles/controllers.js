const { Profile } = require("../../db.js");

const getProfile = async () => {
    try {
        const get = await Profile.findAll()
        return get
    } catch (error) {
        throw new Error(error);
    }

}

const postProfile = async (name) => {
    try {
        const post = await Profile.create({ name })
        return post
    } catch (error) {
        throw new Error(error);
    }
}

const updateProfile = async (name, img, id) => {
    try {
        const profile = await Profile.findByPk(id)
        profile.name = name
        profile.img = img
        profile.save()
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = {
    getProfile,
    postProfile,
    updateProfile
}
