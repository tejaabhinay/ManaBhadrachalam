require('dotenv').config();
const mongoose = require('mongoose');
const Bus = require('./models/Bus');
const Train = require('./models/Train');

const busData = require('./data/busestoBhadrachalam'); 
const trainData = require('./data/trains'); 

mongoose.connect(process.env.MONGO_URI)
    .then(async () => {
        console.log("Connected! Starting data seed...");

        // 1. Clear existing data to avoid duplicates
        await Bus.deleteMany({});
        await Train.deleteMany({});
        console.log("Cleared old data.");

        // 2. Insert Buses
        if (busData.length > 0) {
            await Bus.insertMany(busData);
            console.log(`Added ${busData.length} Buses.`);
        }

        // 3. Insert Trains
        if (trainData.length > 0) {
            await Train.insertMany(trainData);
            console.log(`Added ${trainData.length} Trains.`);
        }

        console.log("Seeding Complete!");
        process.exit();
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });