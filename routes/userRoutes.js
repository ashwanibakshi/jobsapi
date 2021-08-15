const express  = require('express');
const userDb   = require('../db/userDB');
const {upload,multerMidleware} = require('../middleware/multer');
const fs       = require('fs'); 
const {uuid}   = require('uuidv4');
const path     = require('path');

const router   = express.Router();

//--------------- user part start --------------------//

/**
 * @api {post} /user/register       Post_Register
 * @apiName Post_Register
 * @apiGroup User
 *
 * @apiParam {String} name        name
 * @apiParam {String} email       email
 * @apiParam {String} password    password
 *
 * @apiSuccessExample Success-Response:
{
    "data": "user successfully registered",
    "msg": "success"
}
 */
router.post('/register',(req,res)=>{
     userDb.userRegister(req.body)
     .then((data)=>{
           res.json({data:data,msg:"success"});
     })
     .catch((err)=>{
          res.json({error:err.message});
     })
});



/**
 * @api {get} /user/profile/:id      Get_Profile
 * @apiName  Get_Profile
 * @apiGroup User
 * @apiParam {String} id       userid
 * @apiSuccessExample Success-Response:
{
    "data": {
        "resume": "/uploads/resumeda272463-2557-4396-a030-815b02e7bd94.docx",
        "_id": "6119213ac7e550208ccf3c9a",
        "name": "new  user4",
        "email": "u4@u.com",
        "createdAt": "2021-08-15T14:14:18.456Z",
        "address": "address1",
        "phno": 1234567890,
        "updatedAt": "2021-08-15T14:46:54.562Z"
    },
    "msg": "success"
}
 */
router.get('/profile/:id',(req,res)=>{
    userDb.userProfile(req.params.id)
    .then((data)=>{
          res.json({data:data,msg:'success'});
    })
    .catch((err)=>{
        res.json({error:err.message});
    })
});

/**
* @api {put} /user/profile     Update_Profile
* @apiName  Update_Profile
* 
* @apiGroup User
* 
* @apiParam {String} name      user name
* @apiParam {String} email     user email
* @apiParam {String} phno      user phno
* @apiParam {String} resume    user new resume
* @apiParam {String} address   user address
* @apiParam {String} oldresume user oldresume_url
* @apiParam {String} id        user id
* 
* @apiSuccessExample Success-Response:
{
  "data": {
      "resume": "/uploads/resumeda272463-2557-4396-a030-815b02e7bd94.docx",
      "status": "active",
      "_id": "6119213ac7e550208ccf3c9a",
      "name": "new  user4",
      "email": "u4@u.com",
      "password": "$2b$10$bw1p6CHyfIhF9/kAW2F7jO6G5Qsjgzns52JZCclxYbfnLrUY3BXlO",
      "role": "user",
      "createdAt": "2021-08-15T14:14:18.456Z",
      "__v": 0,
      "address": "address2",
      "phno": 1234567890,
      "updatedAt": "2021-08-15T14:46:54.562Z"
  },
  "msg": "success"
}
*/
router.put('/profile',multerMidleware(upload),(req,res)=>{
   let uprofile ;
     if(req.file === undefined){
         if(req.body.oldresume){  
           uprofile = { 
             name:req.body.name,
             email: req.body.email,
              phno: parseInt(req.body.phno),
            resume: req.body.oldresume,
           address: req.body.address,
         updatedAt: Date.now()
           }
         }
         else{
          uprofile = { 
               name: req.body.name,
              email: req.body.email,
               phno: parseInt(req.body.phno),
            address: req.body.address,
          updatedAt: Date.now()
            } 
         }
     }
     else{
       if(req.body.oldresume!==null && req.body.oldresume!==undefined){
        var rpth  = './public'+req.body.oldresume;
        fs.unlinkSync(rpth);
       }
     
       var fname = req.file.fieldname+uuid();
       let filepath = '/uploads/'+fname+path.extname(req.file.originalname);
        uprofile = {
          email: req.body.email,
           phno: parseInt(req.body.phno),
           name: req.body.name,
        address: req.body.address,
         resume: filepath,
      updatedAt: Date.now()    
        }         
     }
  
   userDb.updateUserProfile(uprofile,req.body.id)
   .then((data)=>{
        res.json({data:data,msg:"success"});
   })
   .catch((err)=>{
         res.json({error:err.message});
   })
});


/**
* @api {put} /user/showall     ShowAll_User
* @apiName  ShowAll_User
* 
* @apiGroup User
* 
* 
* @apiSuccessExample Success-Response:
{
  "data": {
      "data": [
          {
              "resume": "/uploads/resumeda272463-2557-4396-a030-815b02e7bd94.docx",
              "status": "active",
              "_id": "6119213ac7e550208ccf3c9a",
              "name": "new  user4",
              "email": "u4@u.com",
              "password": "$2b$10$bw1p6CHyfIhF9/kAW2F7jO6G5Qsjgzns52JZCclxYbfnLrUY3BXlO",
              "role": "user",
              "createdAt": "2021-08-15T14:14:18.456Z",
              "__v": 0,
              "address": "address1",
              "phno": 1234567890,
              "updatedAt": "2021-08-15T14:50:14.948Z"
          }
      ],
      "current": "1",
      "pages": 1
  },
  "msg": "success"
}
*/
router.get('/showall',(req,res)=>{
  let perpage=5,page=1;
  if(req.query.perpage!==null && req.query.perpage!==undefined){
    perpage = req.query.perpage;   
  }
  if(req.query.page!==null && req.query.page!==undefined){
      page = req.query.page;
  }
     userDb.showAllUsers(page,perpage)
     .then((data)=>{
          res.json({data:data,msg:'success'});
     })
     .catch((err)=>{
         res.json({error:err.message});
     })
});



//--------------- user part ends --------------------//

//--------------- company part start --------------//

/**
 * @api {post} /user/registercompany       Post_Register
 * @apiName Post_Register
 * @apiGroup Company
 *
 * @apiParam {String} name        name
 * @apiParam {String} email       email
 * @apiParam {String} password    password
 *
 * @apiSuccessExample Success-Response:
{
    "data": "company successfully registered",
    "msg": "success"
}
 */
router.post('/registercompany',(req,res)=>{
    userDb.companyRegister(req.body)
    .then((data)=>{
        res.json({data:data,msg:"success"});
    })
    .catch((err)=>{
        res.json({error:err.message});
    })
});

router.get('/company/showall',(req,res)=>{  //show all companies
    let perpage=5,page=1;
    if(req.query.perpage!==null && req.query.perpage!==undefined){
      perpage = req.query.perpage;   
    }
    if(req.query.page!==null && req.query.page!==undefined){
        page = req.query.page;
    }
    userDb.showAllCompanies(perpage,page)
    .then((data)=>{
         res.json({data:data,msg:"success"});
    })
    .catch((err)=>{
         res.json({error:err.message});
    })
});


router.get('/profile/company/:id',(req,res)=>{
       userDb.companyProfile(req.params.id)
       .then((data)=>{
            res.json({data:data,msg:'success'});
       })
       .catch((err)=>{
            res.json({error:err.message});
       })
});

// router.put('/profile/company',(req,res)=>{
//    let doc = { 
//          name:req.body.name,
//         email: req.body.email,
//          phno: parseInt(req.body.phno),
//        resume: req.body.oldresume,
//       address: req.body.address,
//       status : req.body.status,
//     updatedAt: Date.now()
//    }
//    userDb.updateCompanyProfile(doc,req.body.id)
//    .then((data)=>{ 
//           res.json({data:data,msg:"success"});
//    })
//    .catch((err)=>{
//           res.json({error:err.message});
//    })
// });

//--------------- company part ends --------------//


//----------------- common apis ----------------//
/**
 * @api {post} /user/login       Post_Login
 * @apiName  Post_Login
 * @apiGroup Login
 * @apiParam {String} email       email
 * @apiParam {String} password    password
 *
 * @apiSuccessExample Success-Response:
 {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMTkxZjJiZDkwMTNmMGUyMDFjMDlkYyIsImVtYWlsIjoidTNAdS5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTYyOTAzNjQ1NCwiZXhwIjoxNjI5NjQxMjU0fQ.hS4JtIphscsMxU5sYXp9QP2Wxc0aSa8guwJ-jCMoI1A",
    "msg": "success"
}
 */
router.post('/login',(req,res)=>{
    userDb.checkEmail(req.body.email)
    .then((data)=>{
        console.log(data);
       return userDb.comparePassword(req.body.password,data);
    })
    .then((dataa)=>{
        console.log(dataa)
        res.json({token:dataa,msg:"success"});
    })
    .catch((err)=>{
         res.json({error:err.message});
    })
});


/**
 * @api {put} /user/status/:id     UpdateStatus(user,company)
 * @apiName  Update_Status
 * 
 * @apiGroup Status
 * 
 * @apiParam {String} id        user id
 * 
 * @apiSuccessExample Success-Response:
{
    "data": {
        "resume": "/uploads/resumeda272463-2557-4396-a030-815b02e7bd94.docx",
        "status": "blocked",
        "_id": "6119213ac7e550208ccf3c9a",
        "name": "new  user4",
        "email": "u4@u.com",
        "password": "$2b$10$bw1p6CHyfIhF9/kAW2F7jO6G5Qsjgzns52JZCclxYbfnLrUY3BXlO",
        "role": "user",
        "createdAt": "2021-08-15T14:14:18.456Z",
        "__v": 0,
        "address": "address1",
        "phno": 1234567890,
        "updatedAt": "2021-08-15T14:50:14.948Z"
    },
    "msg": "success"
}
 */
router.put('/status/:id',(req,res)=>{     //update the status(user or company)
     userDb.updateStatus(req.params.id)
     .then((data)=>{
         res.json({data:data,msg:"success"});
     })  
     .catch((err)=>{
         res.json({error:err.message});
     })   
});


//--------------- common apis ends ---------------//

module.exports = router;