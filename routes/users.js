const express = require("express");
const router = express.Router();

// @route POST    api/users
// @desc          registers a user
// @access        public
router.post("/", (req, res) => {
  res.send("Register a user");
});

//Get request is when we fetch data from server
//post request is when we submit/post data to server
//put request is to update what is already in server
//delete is to delete data on server.

module.exports = router;
