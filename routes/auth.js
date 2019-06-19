const express = require("express");
const router = express.Router();

// @route GET    api/auth
// @desc          get logged in user
// @access        private
router.get("/", (req, res) => {
  res.send("Get logged in user");
});

// @route POST    api/auth
// @desc          Auth user & get token
// @access        Public
router.post("/", (req, res) => {
  res.send("Login user");
});

//Get request is when we fetch data from server
//post request is when we submit/post data to server
//put request is to update what is already in server
//delete is to delete data on server.

module.exports = router;
