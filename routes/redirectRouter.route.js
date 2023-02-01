const express = require("express");
const redirectRouter = express.Router();

redirectRouter.get("/:shortid",(req, res)=>{
    res.status(200).json(req.params)
});

module.exports = redirectRouter;