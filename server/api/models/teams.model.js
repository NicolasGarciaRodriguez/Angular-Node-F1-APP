const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueValidator = require("mongoose-unique-validator");

let teamSchema = new Schema ({
    position: {type: Number},
    points: {type: Number},
    name: {type: String},
    logo: {type: String},
    driver1: {type: String},
    driver2: {type: String},
    carImage: {type: String},
    logo2: {type: String},
    base : {type: String},
    teamChief: {type: String},
    chassis: {type: String},
    powerUnit: {type: String},
    teamEntry: {type: Number},
    worldTitles: {type: Number},
    poles: {type: Number},
    fastestLaps: {type: Number},
    driver1Image: {type: String},
    driver2Image: {type: String},
}, {
    collection: "teams"
})

module.exports = mongoose.model("Teams", teamSchema)
