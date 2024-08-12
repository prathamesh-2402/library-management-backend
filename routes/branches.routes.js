const branches = require("../controllers/branches.controller.js");

var router = require("express").Router();

//create a branch
router.post("/", branches.create);

//get all branches 
router.get("/", branches.getAll);

//get one branch
router.get("/:id", branches.getOne);

//update a branch
router.put("/:id", branches.update);

//delete a branch
router.delete("/:id", branches.delete);

module.exports = router;