const mongoose=require("mongoose");
const express=require("express");
const Bus=require("./models/Bus.js");
const Train = require("./models/Train.js");
const MONGO_URL="mongodb://127.0.0.1:27017/busapp";

const app=express();

main()
    .then(()=>{
        console.log("connected to DB");
    })
    .catch((err)=>{
        console.log(err);
    });

async function main(){
    await mongoose.connect(MONGO_URL);
}

app.get("/",(req,res)=>{
    res.send("Root directory");
});

app.get("/buses", async (req, res) => {
  let { fromCity, toCity } = req.query;

  if (!fromCity || !toCity) {
    return res.status(400).json({ message: "fromCity and toCity are required" });
  }

  fromCity = fromCity.trim();
  toCity = toCity.trim();

  const buses = await Bus.find({
    fromCity: { $regex: `^${fromCity}$`, $options: "i" },
    toCity: { $regex: `^${toCity}$`, $options: "i" },
  });

  res.json({
    count: buses.length,
    buses,
  });
});

app.get("/trains",async(req,res)=>{
  let {from,to}=req.query;
  console.log("request recieved at the backend");
  if(!from||!to){
    return res.status(400).json({message:"from and cities are required"});
  }
  fromCity=from.trim();
  toCity=to.trim();
  console.log("Applied trim function");
  const trains=await Train.find({
    from: { $regex: `^${fromCity}$`, $options: "i" },
    to: { $regex: `^${toCity}$`, $options: "i" },
  });
  console.log("Database call completed");
  res.json(trains);
  console.log("response sent")
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
app.listen(PORT,"0.0.0.0",()=>{
    console.log("server is running on the port 8080");
})