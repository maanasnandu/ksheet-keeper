//CRUD route - create, read, update and delete
const express = require("express");
const router = express.Router();

// @route GET    api/contacts
// @desc          get all users contacts
// @access        private
router.get("/", (req, res) => {
  res.send("Get all contacts");
});

// @route POST    api/contacts
// @desc          Auth new contact
// @access        Private
router.post("/", (req, res) => {
  res.send("Add new contact");
});

// @route PUT    api/contacts/:id
// @desc          to Update contact
// @access        Private
router.put("/:id", (req, res) => {
  res.send("Update contact");
});

// @route DELETE   api/contacts/:id
// @desc          to DElete contact
// @access        Private
router.delete("/:id", (req, res) => {
  res.send("Delete contact");
});

//Get request is when we fetch data from server
//post request is when we submit/post data to server
//put request is to update what is already in server
//delete is to delete data on server.

module.exports = router;
