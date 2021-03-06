const  userModel  = require('../models/userModel');
const  bcrypt     = require('bcrypt');
const  jwt        = require('jsonwebtoken'); 

module.exports.userRegister = (data)=>{
    return new Promise((resolve,reject)=>{
         try{
            bcrypt.genSalt(10,(err,salt)=>{
                 bcrypt.hash(data.password,salt,(err,hash)=>{
                       data.password = hash;
                       let userdata = new userModel();

                       userModel.findOne({"role":"admin"},(err,rdata)=>{
                            if(err){
                                reject(err);
                            }
                            else if(rdata){
                                userdata.name     = data.name,
                                userdata.email    = data.email,
                               userdata.password  = data.password,
                                    userdata.role = "user",
                               userdata.createdAt = Date.now()      
                                userdata.save((err,sdata)=>{
                                    if(err){
                                        reject(err);
                                    }
                                    else if(sdata){
                                        resolve('user successfully registered');
                                    }
                                    else {
                                        reject({message:'data not saved'});
                                    }
                                });    
                            }
                            else{
                                userdata.name     = "admin",
                                userdata.email    = "admin@a.com",
                               userdata.password  = "admi@1234",
                                    userdata.role = "admin", 
                               userdata.createdAt = Date.now()      
                                userdata.save((err,sdata)=>{
                                    if(err){
                                        reject(err);
                                    }
                                    else if(sdata){
                                        resolve('admin successfully registered');
                                    }
                                    else {
                                        reject({message:'data not saved'});
                                    }
                                });            
                            }
                       });
                 });          
            });
         }
         catch(error){
            reject(error);
         }
    });
}

module.exports.companyRegister = (data)=>{
    return new Promise((resolve,reject)=>{
         try{
            bcrypt.genSalt(10,(err,salt)=>{
                 bcrypt.hash(data.password,salt,(err,hash)=>{
                       data.password = hash;
                       let userdata = new userModel({
                           name  : data.name,
                           email : data.email,
                         password: data.password,
                            role : "company",
                        createdAt: Date.now()
                       });
                       userdata.save((err,sdata)=>{
                           if(err){
                               reject(err);
                           }
                           else if(sdata){
                             resolve('company successfully registered');
                           }
                           else {
                               reject({message:'data not saved'});
                           }
                       });
                 });          
            });
         }
         catch(error){
            reject(error);
         }
    });
}


module.exports.checkEmail = (email)=>{
    return new Promise((resolve,reject)=>{
           try {
               userModel.findOne({'email':email,'status':'active'},(err,data)=>{
               if(err){
                   reject(err);
               }
               else if(data){
                  resolve(data);
               }
               else{
                  reject({message:"user is blocked"});
               }
            });
           } catch (error) {
               reject(error);
           }
    });
}

module.exports.comparePassword = (pass,dataa)=>{
    return new Promise((resolve,reject)=>{
        try { 
            bcrypt.compare(pass,dataa.password,(err,match)=>{
                  if(err){
                      reject(err);
                  }
                  else if(match){
                     var token = jwt.sign({
                          'id':dataa._id,
                       'email':dataa.email,
                        'role':dataa.role
                     },"this_my_SECRETKEY123",{'expiresIn':'7days'});
                     resolve(token);
                  }
                  else{
                      reject({message:'wrong email password'});
                  }
            }); 
        } catch (error) {
            reject(error);
        }
    });
}

module.exports.userProfile = (id)=>{
    return new Promise((resolve,reject)=>{
        try {
            userModel.findOne({'_id':id,'status':'active','role':'user'},
 {"_id":1,"name":1,"email":1,"resume":1,"createdAt":1,"updatedAt":1,"address":1,"phno":1},
            (err,dataa)=>{
                if(err){
                  reject(err);
                }
                else if(dataa){
                  resolve(dataa);
                }
                else{
                  reject({message:'users not found'});
                }
           }); 
        } catch (error) {
                 reject(error)   
        }
    });
}

module.exports.updateUserProfile = (udata,id)=>{
        return new Promise((resolve,reject)=>{
            try {

        userModel.findOneAndUpdate({"_id":id},{$set:udata},{new:true},
        (err,dataa)=>{
            if(err){
                reject(err);
            }
            else if(dataa){
                resolve(dataa);
            }
            else{
                reject({message:'data not updated'});
            }
        });
            } catch (error) {
                reject(error);
            }
        }); 
}


module.exports.showAllUsers =(page,perpage)=>{
         return new Promise((resolve,reject)=>{
             try {
                  var query = {};
                query.limit = perpage;
                query.skip  = (perpage*page)-perpage;
              userModel.find({"role":"user"},{},query,(err,dataa)=>{
                   if(err){
                       reject(err);
                   }
                   else if(dataa.length){
                userModel.find({"role":"user"}).count().exec((err,countData)=>{
                        if(err){
                            reject(err);
                        }
                        else{
                            resolve({
                                data:dataa,
                             current:page,
                               pages:Math.ceil(countData/perpage)
                            });
                        }
                      });                   
                   }
                   else{
                       reject('no data found');
                   }
               });
             } catch (error) {
                 reject(error);
             }                  
         });
}

module.exports.companyProfile =(id)=>{
    return new Promise((resolve,reject)=>{
        try {
            userModel.find({"_id":id,"status":"active","role":"company"},{"_id":1,"name":1,"email":1,"phno":1,"address":1},(err,dataa)=>{
                  if(err){
                      reject(err);
                  }
                  else if(dataa){
                       resolve(dataa);
                  }
                  else{
                    reject({message:'no data found!'});
                  }
            });
        } catch (error) {
            reject(error);
        }
    });
}

module.exports.showAllCompanies =(perpage,page)=>{
    return new Promise((resolve,reject)=>{
         try {
             let query={};
             query.skip  = (perpage*page)-perpage;
             query.limit = perpage;
            userModel.find({"role":"company"},
{"_id":1,"name":1,"email":1,"phno":1,"password":1,"status":1,"createdAt":1,"updatedAt":1},query,(err,dataa)=>{
                 if(err){
                     reject(err);
                 }
                 else if(dataa.length){
             userModel.find({"role":"company"}).count().exec((err,countData)=>{
                 if(err){
                     reject(err);
                 }
                 else{
                    resolve({
                        data:dataa,
                        current:page,
                        pages:Math.ceil(countData/perpage)
                      });
                     }
                  });             
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


module.exports.updateCompanyProfile = (udata,id)=>{
    return new Promise((resolve,reject)=>{
        try {
    userModel.findOne({"phno":udata.phno,"_id":id},(err,fdata)=>{
          if(err){
              reject(err);
          }
          else if(fdata){        
               upCompanyProfile(udata,id,(err,dataa)=>{
                     if(err){
                         reject(err);
                     }
                     else if(dataa){
                         resolve(dataa)
                     }
                     else{
                         reject({message:"data not updated"});
                     }
               });
           }
          else {
               userModel.findOne({"phno":udata.phno},(err,dataa)=>{
                   if(err){
                       reject(err);
                   }
                   else if(dataa){
                        reject({message:"phno already taken by other user"});
                   }
                   else{
                    upCompanyProfile(udata,id,(err,dataa)=>{
                        if(err){
                            reject(err);
                        }
                        else if(dataa){
                            resolve(dataa);
                        }
                        else{
                            reject({message:"data not updated"});
                        }
                    });     
                   }
               });
           }
         });
        } catch (error) {
            reject(error);
        }
    }); 
}

function upCompanyProfile(udata,id,cb){
    userModel.findOneAndUpdate({"_id":id},{$set:udata},{new:true},
    (err,dataa)=>{
        if(err){
            cb(err,null);
        }
        else if(dataa){
            userModel.findOne({"_id":id},{"_id":1,"name":1,"email":1,"phno":1,"createdAt":1,"updatedAt":1},(err,cdata)=>{
               if(err){
                   cb(err,null);
               }
               else{
                   cb(null,cdata);
               }
            });
         }
        else{
            cb("data not updated",null);
           }
        });
}

module.exports.updateStatus = (id)=>{
    return new Promise((resolve,reject)=>{
         try {
              userModel.findOneAndUpdate({"_id":id,"status":"active"},{$set:{"status":"blocked"}}
             ,{new:true} ,(err,dataa)=>{
                     if(err){
                         reject(err);
                     }
                     else if(dataa){
                         resolve(dataa);
                     }
                     else{
                        reject({message:'no data updated'})
                     }
              }); 
         } catch (error) {
             reject(error);
         }
    });
}