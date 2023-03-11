const Mongoose=require("mongoose")


let dSchema=Mongoose.Schema(
    {

name:String,
specilisation:String,
mobile:String

    }
)

module.exports=Mongoose.model("doctors",dSchema)