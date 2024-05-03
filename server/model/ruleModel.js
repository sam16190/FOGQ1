const mongoose = require('mongoose');
const ruleSchema = new mongoose.Schema({
    tickets: {
      type: Number,
      required: true,
      unique:false,
    },
    vehiclespawndelay: {
        type: Number,
        required: true,
        unique:false,
      },
    bulletdamage: {
      type: Number,
      required: true,
      unique:false,
    },
    kickafterteamkills: {
      type:Number,
      required: true,
      unique: false,
    },
    playerhealth: {
        type: Number,
        required: true,
        unique:false,
      },
      playerrespawntime: {
          type: Number,
          required: true,
          unique:false,
        },
      kickafteridle: {
        type: Number,
        required: true,
        unique:false,
      },
      banafterkicks: {
        type:Number,
        required: true,
        unique: false,
      },
    
  
  
  
    },
  );
  module.exports = mongoose.model("Rule", ruleSchema);