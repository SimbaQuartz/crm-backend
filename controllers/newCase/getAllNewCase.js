const NewCase =require("../../models/newCase.model")

const getAllNewCase = async (req,res,next)=>{
    try{
        const startIndex = parseInt(req.query.startIndex) || 0;
        const viewSize = parseInt(req.query.viewSize) || 10;
        const searchCriteria ={};

    const data =await NewCase.aggregate([
        {
            $facet:{
                count:[{$count: "totalCount"}],
                data:[
                    {
                        $sort:{
                            createdAt:-1,
                        }
                    },
                    {
                        $skip:startIndex
                    },
                    {
                        $limit:viewSize
                    }
                ]
            }
        }
    ]);
    const totalCount =await NewCase.countDocuments(searchCriteria);
    if(!data) throw creatError.BadRequest("case not found");
    res.status(200).json({
        success: true,
        count:data.length,
        totalCount,
        data: data[0].data,
        total:data[0].count[0]? data[0].count[0].total:0    
    })
    }catch (error) {
        console.log("error: ", error);
        next(error);
    }
};
module.exports = getAllNewCase