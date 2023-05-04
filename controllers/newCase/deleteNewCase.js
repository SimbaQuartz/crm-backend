const NewCase = require("../../models/newCase.model")

const deleteNewCase = async(req,res,next)=>{
    try{
        const {id}= req.params;
        const data = await NewCase.findOneAndDelete({_id:Object(id)});
        res.status(200).json({sucess:true});
    }
    catch(error){
        console.log("error",error);
        next(error);
    }
}
module.exports = deleteNewCase;