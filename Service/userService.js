const { hash } = require("bcryptjs");
const { v4: uuid } = require("uuid");
const userModel = require("../Model/userModel");
// const { response } = require("express");
module.exports = {
  createUser: async (body) => {
    try {
      body.password = await hash(body.password, 10);
      delete body.confirmPassword;
      body.userId = uuid();
      const user = await userModel.createUser(body);
      delete body.password;
      if (user.error) {
        return {
          error: user.error,
        };
      }
      return {
        response: user.response,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  getAllusers: async () => {
    try {
      const user = await userModel.getAllusers();
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
  deleteUser: async (body) => {
    try {
      const deleteUser = await userModel.deleteUser(body.userId);
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
  updateUser: async (body) => {
    try {
      const updateUser = await userModel.updateUser({ ...body });
      if (updateUser.error || !updateUser.response[0]) {
        return {
          error: {
            message: "unable to update",
            error: updateUser?.error || updateUser.response,
          },
        };
      }
      return {
        response: { message: "user updated!", response: updateUser.response },
      };
    } catch (error) {
      return { error: error };
    }
  },
};
