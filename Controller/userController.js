const joi = require("joi");
const userService = require("../Service/userService");

const creatUserSchema = joi.object().keys({
  userName: joi.string().min(6).max(30).required(),
  email: joi.string().email().required(),
  password: joi.string().min(6).max(30).required(),
  confirmPassword: joi.ref("password"),
});
const updateUserSchema = joi.object().keys({
  userId: joi.string().required(),
  userName: joi.string().alphanum().min(3).max(34),
});
const deleteUserSchema = joi.object().keys({
  userName: joi.string().min(6).max(30),
  userId: joi.string().required(),
});

module.exports = {
  createUser: async (req, res) => {
    try {
      console.log(req.body);
      const validate = await creatUserSchema.validateAsync(req.body);
      const user = await userService.createUser(validate);

      if (user.error) {
        return res.send({
          error: user.error,
        });
      }
      return res.send({
        response: user.response,
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
  getAllusers: async (req, res) => {
    try {
      const user = await userService.getAllusers();
      if (user.error) {
        return {
          error: user.error,
        };
      }
      return res.send({
        response: user,
      });
    } catch (error) {
      return res.send({ message: error.message });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const validate = await deleteUserSchema.validateAsync(req.body);
      const deleteUser = await userService.deleteUser(validate);
      if (deleteUser.error) {
        return {
          error: deleteUser.error,
        };
      }
      return res.send({
        response: deleteUser,
      });
    } catch (error) {
      return res.send({ message: error.message });
    }
  },
  updateUser: async (req, res) => {
    try {
      const validate = await updateUserSchema.validateAsync(req.body);
      const updateUser = await userService.updateUser(validate);
      if (updateUser.error) {
        return res.send({
          error: updateUser.error,
        });
      }
      return res.send({
        response: updateUser.response,
      });
    } catch (error) {
      return { error: error };
    }
  },
};
