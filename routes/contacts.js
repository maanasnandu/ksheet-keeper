//CRUD route - create, read, update and delete
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const User = require("../models/User");
//express validator for validation
const { check, validationResult } = require("express-validator/check");
const Contact = require("../models/Contact");

// @route GET    api/contacts
// @desc          get all users contacts
// @access        private
router.get("/", auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1
    });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route POST    api/contacts
// @desc          Auth new contact
// @access        Private
router.post(
  "/",
  [
    auth,
    [
      check("name", "required")
        .not()
        .isEmpty()
    ],
    [
      check("sex", "required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      name,
      age,
      sex,
      occupation,
      phone,
      rocular,
      locular,
      rlids,
      llids,
      rconjunetiva,
      lconjunetiva,
      lcornea,
      rcornea,
      lanterior,
      ranterior,
      liris,
      riris,
      lpupil,
      rpupil,
      llens,
      rlens,
      lvitreous,
      rvitreous,
      lfundus,
      rfundus,
      loldpower,
      roldpower,
      lva,
      rva,
      lvaold,
      rvaold,
      larreading,
      rarreading,
      lst,
      rst,
      liop,
      riop,
      colorvision,
      lvisualfields,
      rvisualfields,
      ltreatment,
      rtreatment,
      followup
    } = req.body;
    try {
      const newContact = new Contact({
        name,
        age,
        sex,
        occupation,
        phone,
        rocular,
        locular,
        rlids,
        llids,
        rconjunetiva,
        lconjunetiva,
        lcornea,
        rcornea,
        lanterior,
        ranterior,
        liris,
        riris,
        lpupil,
        rpupil,
        llens,
        rlens,
        lvitreous,
        rvitreous,
        lfundus,
        rfundus,
        loldpower,
        roldpower,
        lva,
        rva,
        lvaold,
        rvaold,
        larreading,
        rarreading,
        lst,
        rst,
        liop,
        riop,
        colorvision,
        lvisualfields,
        rvisualfields,
        ltreatment,
        rtreatment,
        followup,
        user: req.user.id
      });
      const contact = await newContact.save();
      res.json(contact);
    } catch (err) {
      console.error(er.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route PUT    api/contacts/:id
// @desc          to Update contact
// @access        Private
router.put("/:id", auth, async (req, res) => {
  const {
    name,
    age,
    sex,
    occupation,
    phone,
    rocular,
    locular,
    rlids,
    llids,
    rconjunetiva,
    lconjunetiva,
    lcornea,
    rcornea,
    lanterior,
    ranterior,
    liris,
    riris,
    lpupil,
    rpupil,
    llens,
    rlens,
    lvitreous,
    rvitreous,
    lfundus,
    rfundus,
    loldpower,
    roldpower,
    lva,
    rva,
    lvaold,
    rvaold,
    larreading,
    rarreading,
    lst,
    rst,
    liop,
    riop,
    colorvision,
    lvisualfields,
    rvisualfields,
    ltreatment,
    rtreatment,
    followup
  } = req.body;

  //Build contact object
  const contactFields = {};
  if (name) contactFields.name = name;
  if (age) contactFields.age = age;
  if (sex) contactFields.sex = sex;
  if (occupation) contactFields.occupation = occupation;
  if (phone) contactFields.phone = phone;

  if (locular) contactFields.locular = locular;
  if (rocular) contactFields.rocular = rocular;

  if (rlids) contactFields.rlids = rlids;
  if (llids) contactFields.llids = llids;

  if (lconjunetiva) contactFields.lconjunetiva = lconjunetiva;
  if (rconjunetiva) contactFields.rconjunetiva = rconjunetiva;

  if (lcornea) contactFields.lcornea = lcornea;
  if (rcornea) contactFields.rcornea = rcornea;

  if (lanterior) contactFields.lanterior = lanterior;
  if (ranterior) contactFields.ranterior = ranterior;

  if (liris) contactFields.liris = liris;
  if (riris) contactFields.riris = riris;

  if (lpupil) contactFields.lpupil = lpupil;
  if (rpupil) contactFields.rpupil = rpupil;

  if (rlens) contactFields.rlens = rlens;
  if (llens) contactFields.llens = llens;

  if (rvitreous) contactFields.rvitreous = rvitreous;
  if (lvitreous) contactFields.lvitreous = lvitreous;

  if (lfundus) contactFields.lfundus = lfundus;
  if (rfundus) contactFields.rfundus = rfundus;

  if (loldpower) contactFields.loldpower = loldpower;
  if (roldpower) contactFields.roldpower = roldpower;

  if (rva) contactFields.rva = rva;
  if (lva) contactFields.lva = lva;

  if (lvaold) contactFields.lvaold = lvaold;
  if (rvaold) contactFields.rvaold = rvaold;

  if (larreading) contactFields.larreading = larreading;
  if (rarreading) contactFields.rarreading = rarreading;

  if (lst) contactFields.lst = lst;
  if (rst) contactFields.rst = rst;

  if (liop) contactFields.liop = liop;
  if (riop) contactFields.riop = riop;

  if (colorvision) contactFields.colorvision = colorvision;

  if (lvisualfields) contactFields.lvisualfields = lvisualfields;
  if (rvisualfields) contactFields.rvisualfields = rvisualfields;

  if (rtreatment) contactFields.rtreatment = rtreatment;
  if (ltreatment) contactFields.ltreatment = ltreatment;

  if (followup) contactFields.followup = followup;

  try {
    let contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ msg: "Contact not found" });

    //Make sure user owns the contact
    if (contact.user.toString() != req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }
    contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { $set: contactFields },
      { new: true }
    );
    res.json(contact);
  } catch (err) {
    console.error(er.message);
    res.status(500).send("Server Error");
  }
});

// @route DELETE   api/contacts/:id
// @desc          to DElete contact
// @access        Private
router.delete("/:id", auth, async (req, res) => {
  try {
    let contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ msg: "Contact not found" });

    //Make sure user owns the contact
    if (contact.user.toString() != req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }
    await Contact.findByIdAndRemove(req.params.id);
    res.json({ msg: "Contact removed" });
  } catch (err) {
    console.error(er.message);
    res.status(500).send("Server Error");
  }
});

//Get request is when we fetch data from server
//post request is when we submit/post data to server
//put request is to update what is already in server
//delete is to delete data on server.

module.exports = router;
