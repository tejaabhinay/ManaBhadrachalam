const mongoose=require("mongoose");
const Bus=require("./models/Bus");
const busesToBhadrachalam = require("./data/busestoBhadrachalam");
const Train = require("./models/Train");
const { default: trains } = require("./data/trains");
const MONGO_URL="mongodb://127.0.0.1:27017/busapp";

async function init(){
  await mongoose.connect(MONGO_URL);
  console.log("Mongo db connected");
  await Bus.deleteMany({});
  console.log("Bus Data Deleted");
  await Bus.insertMany(busesToBhadrachalam);
  console.log("Buses are pushed into database");
  await Train.deleteMany({});
  console.log("Train data deleted");
  await Train.insertMany(trains);
  console.log("Train data pushed into database");
  await mongoose.disconnect();
  console.log("DB Closed");
} 

init();