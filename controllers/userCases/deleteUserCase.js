const userCaseModel = require("../../models/userCase.model");

const deleteUserCase = async (req, res) => {
  try {
    const deleteUser = await userCaseModel.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      success: true,
      message: "User case deleted successfully.",
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: "Please provide existing case.",
      error,
    });
  }
};

module.exports = deleteUserCase;
