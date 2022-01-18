const express = require("express");
const teamsModel = require("../models/teams.model");
const router = express.Router();
const teamSchema = require("../models/teams.model");
const authorize = require("../utils/middlewares/auth.middlewares");

router.route("/teams").get(authorize, (req, res, next) => {
    teamSchema.find((error, response) => {
        if (error) {
            return next (error)
        }
        res.status(200).json(response)
    })
});


router.route("/teams/:id").get(authorize, (req, res, next) => {
    teamSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next (error)
        }
        res.status(200).json({msg: data})
    })
})



module.exports = router