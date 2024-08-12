const checkouts = require("../controllers/checkouts.controller");

var router = require("express").Router();

//create a checkout
router.post("/", checkouts.create);

//get all checkouts
router.get("/", checkouts.getAll); 

//get one checkout
router.get("/:id", checkouts.getOne);

//update a checkout
router.put("/:id", checkouts.update);

//delete a checkout
router.delete("/:id", checkouts.delete);

module.exports = router;