
const mongoose = require('mongoose');


const navSchema = new mongoose.Schema({
    currentplayers: {
      type: Number,
      required: true,
      unique:false,
    },
    totalplayers: {
        type: Number,
        required: true,
        unique:false,
      },
    ping: {
      type: Number,
      required: true,
      unique:false,
    },
    tickrate: {
      type:Number,
      required: true,
      unique: false,
    },
    
  
  
  
    },
  );
  module.exports = mongoose.model("Navbar", navSchema);