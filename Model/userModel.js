const { models } = require("./index");
module.exports = {
  createUser: async (body) => {
    try {
      const user = await models.users.create({ ...body });
      return {
        response: user,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  getAllusers: async () => {
    try {
      const user = await models.users.findAll({
        attributes: {
          exclude: ["password", "deletedAt"],
        },
      });
      if (user.error) {
        return {
          error: user.error,
        };
      }
      return {
        response: user,
      };
    } catch (error) {
      return { message: error.message };
    }
  },
  deleteUser: async (userId) => {
    try {
      const deleteUser = await models.users.destroy({
        where: { userId: userId },
      });
      if (deleteUser.error) {
        return {
          error: deleteUser.error,
        };
      }
      return {
        response: deleteUser,
      };
    } catch (error) {
      return { message: error.message };
    }
  },
  updateUser: async ({ userId, ...body }) => {
    try {
      const updateUser = await models.users.update(
        { ...body },
        {
          where: { userId: userId },
        }
      );
      console.log(updateUser);
      return { message: "user Updated", response: updateUser };
    } catch (error) {
      return { message: error.message };
    }
  },
};
