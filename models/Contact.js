//this is a model for user
//for registration process..

const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  name: {
    type: String,
    required: true
  },

  age: {
    type: String
  },

  sex: {
    type: String,
    required: true
  },

  occupation: {
    type: String
  },

  phone: {
    type: String
  },

  locular: {
    type: String
  },

  rocular: {
    type: String
  },

  rlids: {
    type: String
  },

  llids: {
    type: String
  },

  rconjunetiva: {
    type: String
  },

  lconjunetiva: {
    type: String
  },

  rcornea: {
    type: String
  },

  lcornea: {
    type: String
  },

  ranterior: {
    type: String
  },

  lanterior: {
    type: String
  },

  riris: {
    type: String
  },

  liris: {
    type: String
  },

  rpupil: {
    type: String
  },
  lpupil: {
    type: String
  },

  rlens: {
    type: String
  },
  llens: {
    type: String
  },

  rvitreous: {
    type: String
  },

  lvitreous: {
    type: String
  },
  rfundus: {
    type: String
  },
  lfundus: {
    type: String
  },

  roldpower: {
    type: String
  },
  loldpower: {
    type: String
  },
  rva: {
    type: String
  },
  lva: {
    type: String
  },
  rvaold: {
    type: String
  },
  lvaold: {
    type: String
  },
  rarreading: {
    type: String
  },
  larreading: {
    type: String
  },
  rst: {
    type: String
  },
  lst: {
    type: String
  },
  riop: {
    type: String
  },
  liop: {
    type: String
  },

  colorvision: {
    type: String
  },
  rvisualfields: {
    type: String
  },
  lvisualfields: {
    type: String
  },
  rtreatment: {
    type: String
  },
  ltreatment: {
    type: String
  },

  followup: {
    type: String
  },

  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model("contact", ContactSchema);
