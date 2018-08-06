const express = require("express");

const router = express.Router();

// Import the model (cat.js) to use its database functions.
const burgers = require("../models/burger.js");

router.get("/", function (req, res) {
    burgers.all(function (data) {
        let hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    })
});

router.post("/api/burgers", function(req, res) {
    burgers.create([
        "burger_name", "devoured"
      ], [
        req.body.burger_name, req.body.devoured
      ], function(result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
      });
});

router.put("/api/burgers/:id", function(req, res) {
    let condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burgers.update({
      devoured: req.body.devoured
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

module.exports = router;