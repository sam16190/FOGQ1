
const mongoose = require('mongoose');



const advancedSchema = new mongoose.Schema({
    minimap: {
      type: Boolean,
      required: true,
      unique:false,
    },
    onlysquadleaderspawn: {
        type: Boolean,
        required: true,
        unique:false,
      },
    vehicles: {
      type: Boolean,
      required: true,
      unique:false,
    },
    teambalance: {
      type:Boolean,
      required: true,
      unique: false,
    },
    minimapspotting: {
        type:Boolean,
        required: true,
        unique: false,
    },
    hud: {
        type: Boolean,
        required: true,
        unique:false,
      },
      threepvehiclecam: {
          type: Boolean,
          required: true,
          unique:false,
        },
      regenerativehealth: {
        type: Boolean,
        required: true,
        unique:false,
      },
      killcam: {
        type:Boolean,
        required: true,
        unique: false,
      },
      friendlyfire: {
          type:Boolean,
          required: true,
          unique: false,
      },
      threedspotting: {
        type:Boolean,
        required: true,
        unique: false,
    },
    enemynametags: {
        type:Boolean,
        required: true,
        unique: false,
    }
    
  
  
  
    },
  );
  module.exports = mongoose.model("Advanced", advancedSchema);