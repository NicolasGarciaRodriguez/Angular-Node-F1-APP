const mongoose = require("mongoose");
const Schema = mongoose.Schema
const uniqueValidator = require("mongoose-unique-validator");

let driverSchema = new Schema({
    name: {type: String, unique: true },
    number: {type: Number},
    points: {type: Number},
    flag: {type: String},
    team: {type: String},
    image1: {type: String},
    country: {type: String},
    podiums: {type: Number},
    gps: {type: Number},
    worldTitles: {type: Number},
    Date: {type: String},
    Birth: {type: String},
    image2: {type: String},
    casco: {type: String},
    position: {type: Number}
}, {
    collection: "drivers"
})

driverSchema.plugin(uniqueValidator, { message: 'Name already in use.' });
module.exports = mongoose.model('Drivers', driverSchema);