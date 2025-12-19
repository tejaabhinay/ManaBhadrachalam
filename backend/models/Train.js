const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const trainSchema=new mongoose.Schema({
    from:{
        type:String,
        required:true
    },
    to:{
        type:String,
        required:true
    },
    trainNumber:{
        type:Number,
        required:true
    },
    trainName:{
        type:String,
        required:true
    },
    departureTime:{
        type:String,
        required:true
    },
    arrivalTime:{
        type:String,
        required:true
    },
    daysOfOperation:{
        type:[String],
        required:true
    },
    classes:{
        type:[String],
        required:true
    },
});

const Train=mongoose.model("Train",trainSchema);

module.exports=Train;