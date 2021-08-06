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
      },
      status:{
          type:String,
        default:"active"
      }
});

const jobsAppliedSchema = new mongoose.Schema({
      uid :{
          type:mongoose.Schema.Types.ObjectId,
          ref:'users',
          },
          jobid:{
              type:mongoose.Schema.Types.ObjectId,
              ref:'vacancies'
          },
          appliedon:{
              type:Date,
              default: Date.now()
          },
          status:{
              type:String,
              default:'active'
          }
      });

var vacancyApplied =  mongoose.model('vacancieapplieds',jobsAppliedSchema);      
var vacancies      =  mongoose.model('vacancies',jobSchema);

module.exports = {
    vacancyApplied,
    vacancies
}