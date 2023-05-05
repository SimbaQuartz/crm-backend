const jwt = require("jsonwebtoken");

const { accessSecret } = require("../../config/keys").jwt;

const Token = require("../../models/RefreshToken.model");

const logoutUser = async (req, res, next) => {
  try {
    if (req.headers?.authorization) {
        const { authorization } = req.headers;
  
  
        if (authorization) {
          const { data } = jwt.verify(
            authorization !== undefined ? authorization : accessToken,
            accessSecret
          );
          const removeToken = await Token.findOneAndDelete({
            _userId: data?._id,
            token: authorization,
          });
  
          res.cookie("auth", "deleted", {
            expires: new Date(Date.now() + 10000),
            httpOnly: true,
          });
        }
        res.status(200).json({
          success: true,
          message: "User logged out successfully",
        });
      }
    } catch (error) {
      next(error);
    }
  };
  
  module.exports = logoutUser;
