const express  = require('express');
const userDb   = require('../db/userDB');
const {upload,multerMidleware} = require('../middleware/multer');

const router  = express.Router();


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
 *     HTTP/1.1 200 OK
 *
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
 * @api {post} /user/registercompany       Post_Register
 * @apiName Post_Register
 * @apiGroup Company
 *
 * @apiParam {String} name        name
 * @apiParam {String} email       email
 * @apiParam {String} password    password
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
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

/**
 * @api {post} /user/login       Post_Login
 * @apiName  Post_Login
 * @apiGroup Login
 * @apiParam {String} email       email
 * @apiParam {String} password    password
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
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
 * @api {get} /user/profile/:id      Get_Profile
 * @apiName  Get_Profile
 * @apiGroup User
 * @apiParam {String} id       userid
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
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
 * @api {get} /user/profile/:id      Update_Profile
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
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
 */
router.put('/profile',multerMidleware(upload),(req,res)=>{
     let uprofile ;
       if(req.file === undefined){
           if(req.body.oldresume){  
             uprofile = { 
               name:req.body.name,
               email: req.body.email,
                phno: req.body.phno,
              resume: req.body.oldresume,
             address: req.body.address,
           updatedAt: Date.now()
             }
           }
           else{
            uprofile = { 
                 name: req.body.name,
                email: req.body.email,
                 phno: req.body.phno,
              address: req.body.address,
            updatedAt: Date.now()
              } 
           }
       }
       else{
        var rpth  = './public'+req.body.oldpic;
        fs.unlinkSync(rpth);
         var fname = getname();
         let filepath = '/uploads/'+fname+path.extname(req.file.originalname);
          uprofile = {
            email: req.body.email,
             phno: req.body.phno,
             name: req.body.name,
          address: req.body.address,
           resume: filepath,
        updatedAt: Date.now()    
          }         
       }
    
     userDb.updateUserProfile()
     .then((data)=>{
          res.json({data:data,msg:"success"});
     })
     .catch((err)=>{
           res.json({error:err.message});
     })
});


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

router.put('/status/:id',(req,res)=>{     //update the status
     userDb.updateStatus(req.params.id)
     .then((data)=>{
         res.json({data:data,msg:"success"});
     })  
     .catch((err)=>{
         res.json({error:err.message});
     })   
});


module.exports = router;