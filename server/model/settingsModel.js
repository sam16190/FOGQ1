const mongoose = require('mongoose');

const settingsSchema = new mongoose.Schema({
    region: {
      type: String,
      required: true,
      unique:false,
    },
    punkbaster: {
        type: Boolean,
        required: true,
        unique:false,
      },
    fairfight: {
      type: Boolean,
      required: true,
      unique:false,
    },
    password: {
      type:Boolean,
      required: true,
      unique: false,
    },
    preset: {
        type:String,
        required: true,
        unique: false,
    }
    
  
  
  
    },
  );
  module.exports = mongoose.model("Settings", settingsSchema);