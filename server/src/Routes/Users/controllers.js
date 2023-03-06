const { User } = require("../../db.js");

const getUsers = async () => {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    throw new Error(error);
  }
};

const postUser = async (name, lastname, email, password) => {
  try {
    const userDb = await User.findOne({
      where: {
        email,
      },
    });
    if (userDb) {
      throw new Error("This email is already used");
    }
    const user = await User.create({ name, lastname, email, password });
    return user;
  } catch (error) {
    throw new Error(error);
  }
};

const getUserById = async (id) => {
  try {
    const result = await User.findByPk(id);
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  getUsers,
  postUser,
  getUserById,
};
