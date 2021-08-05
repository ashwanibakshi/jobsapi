const mongoose  = require('mongoose');


const jobSchema = new mongoose.Schema({
      title:{
          type:String,
          required:true
      },
      description:{
          type:String,
          required:true
      },
      qualification:{
          type:String,
          required:true
      },
      tags:{
          type:String,
          required:true
      },
      cid:{
          type: mongoose.Schema.Types.ObjectId,
          ref:'users'
      }
});

module.exports =  mongoose.model('vacancy',jobSchema);