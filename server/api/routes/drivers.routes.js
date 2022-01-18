const express = require("express");
const router = express.Router();
const driverSchema = require("../models/drivers.model");
const authorize = require("../utils/middlewares/auth.middlewares");


//Get all drivers
router.route("/drivers").get(authorize, (req, res, next) => {
    driverSchema.find((error, response) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json(response)
        }
    })
})


//Get single driver

router.route("/drivers/:id").get(authorize, (req, res, next) => {
    driverSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json({msg: data})
        }
    })
})

module.exports = router