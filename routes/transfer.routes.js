const transfer = require("../controllers/transfer.controller.js");

var router = require("express").Router();

//create a branch
router.post("/", transfer.create);

//get all branches 
router.get("/", transfer.getAll);

//get one branch
router.get("/:id", transfer.getOne);

//update a branch
router.put("/:id", transfer.update);

//delete a branch
router.delete("/:id", transfer.delete);

module.exports = router;