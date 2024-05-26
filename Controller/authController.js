module.exports = {
  login: (req, res) => {
    try {
      return res.send({
        response: "Login Successfully!",
        data: req.body,
      });
    } catch (error) {
      returnres.send({
        message: error.message,
      });
    }
  },
};
