const jobModel          = require('../models/jobModel').vacancies;
const jobAppliedModel   = require('../models/jobModel').vacancyApplied;
const userModel         = require('../models/userModel');
const mongoose          = require('mongoose');

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
           userModel.findOne({"_id":data.cid,"status":"active"},(err,fdata)=>{
               if(err){
                    reject(err);  
               }
               else if(fdata){
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
               }
               else{
                   reject({message:'company not found'});
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
                         resolve("job successfully removed");
                     }
                     else{
                         reject({message:'data not deleted'});
                     }
            });
       } catch (error) {
           reject(error);
       }
    });
}

module.exports.showCompanyJobs =(cid)=>{
   return new Promise((resolve,reject)=>{
       try {
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
       } catch (error) {
           reject(error);
       }
   });
}

//--------------- company part ends --------------//


//--------------- user part starts --------------//

module.exports.applyForJob =(data)=>{
    return new Promise((resolve,reject)=>{
      try {
          let jobsApplied = new jobAppliedModel({
                uid : data.uid,
              jobid : data.jobid
          });
          jobAppliedModel.findOne({'uid':data.uid,'jobid':data.jobid,'status':'active'},(err,data)=>{
               if(err){
                   reject(err);
               }
               else if(!data){
                jobsApplied.save((err,dataa)=>{
                    if(err){
                        reject(err);
                    }
                    else if(dataa){
                        resolve(dataa);
                    }
                    else{
                        reject({message:'some error occured'});
                    }
                });          
               }
               else{
                  reject({message:'you already applied for this job'});
               }
          });
      } catch (error) {
          reject(error);
      }
    });
}

module.exports.showAllAppliedJob = (id)=>{
    return new Promise((resolve,reject)=>{
        try {
            jobAppliedModel.find({"uid":id},(err,data)=>{
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

//--------------- xxxxxxxxxxxxxx  ---------------//

