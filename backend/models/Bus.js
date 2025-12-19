const mongoose= require("mongoose");
const Schema=mongoose.Schema;
const busSchema =new mongoose.Schema({
    fromCity:{
        type:String,
        required:true
    },
    toCity:{
        type:String,
        required:true
    },
    operator:{
        type:String,
        required:true
    },
    busType:{
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
    serviceNumber:{
        type:Number,
        required:true
    },
    daysOfOperation:{
        type:[String],
        default:["Daily"]
    },
});

const Bus=mongoose.model("Bus",busSchema);

module.exports=Bus;