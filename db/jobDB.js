const jobModel = require('../models/jobModel');

module.exports.addJob =(data)=>{
 return new Promise((resolve,reject)=>{
      try {
           let jobData =  new jobModel({
              cid           : data.cid,
              title         : data.title,
              description   : data.description,
              qualification : data.qualification,
              tags          : data.tags
           });     
           jobData.save((err,sdata)=>{
              if(err){
                  reject(err);
              }
              else if(sdata){
                  resolve(sdata);
              }
              else{
                  reject({message:'data not saved'});
              }
           });
      } catch (error) {
          reject(error);
      }
 });
}

module.exports.editJob = (id)=>{
    return new Promise((resolve,reject)=>{
         try {
             jobModel.findOne({"_id":id},(err,data)=>{
                   if(err){
                       reject(err);
                   }
                   else if(data){
                       resolve(data);
                   }
                   else{
                       reject({message:'no data found'});
                   }
             });     
         } catch (error) {
             reject(error);
         } 
    });
}

module.exports.deleteJob = (id)=>{
    return new Promise((resolve,reject)=>{
       try {
            jobModel.findOneAndDelete({'_id':id},(err,data)=>{
                     if(err){
                         reject(err);
                     }
                     else if(data){
                         resolve(data);
                     }
                     else{
                         reject({msg:'data not deleted'});
                     }
            });
       } catch (error) {
           reject(error);
       }
    });
}

module.exports.showCompanyJobs =(cid)=>{
   return new Promise((resolve,reject)=>{
          jobModel.find({'cid':cid},(err,dataa)=>{
              if(err){
                  reject(err);
              }
              else if(dataa.length){
                    resolve(dataa);  
              }
              else{
                  reject({message:'no data found'});
              }
          });
   });
}


