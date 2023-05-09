const newCase = require("../../models/newCase.model")

const createNewCase = async(req,res,next) =>{
    console.log(1)
    try{
        const{email,givenNames,familyName,caseType,dateOfBirth,access} = req.body;
        const data = new newCase({
            email,
            givenNames,
            caseType,
            dateOfBirth,
            access,
            familyName,

        })
        await data.save();
        res.status(200).json({sucess:true,data});

    }
    catch (error) {
        console.log("error: ", error);
        next(error);
      }
}
module.exports = createNewCase;