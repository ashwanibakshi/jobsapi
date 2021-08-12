const express  = require('express');
const userDb   = require('../db/userDB');
const {upload,multerMidleware} = require('../middleware/multer');

const router  = express.Router();



router.post('/register',(req,res)=>{
     userDb.userRegister(req.body)
     .then((data)=>{
           res.json({data:data,msg:"success"});
     })
     .catch((err)=>{
          res.json({error:err.message});
     })
});

router.post('/registercompany',(req,res)=>{
    userDb.companyRegister(req.body)
    .then((data)=>{
        res.json({data:data,msg:"success"});
    })
    .catch((err)=>{
        res.json({error:err.message});
    })
});


router.post('/login',(req,res)=>{
    console.log('adad')
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

router.get('/profile/:id',(req,res)=>{
      userDb.userProfile(req.params.id)
      .then((data)=>{
            res.json({data:data,msg:'success'});
      })
      .catch((err)=>{
          res.json({error:err.message});
      })
});

// router.put('/profile',multerMidleware(upload),(req,res)=>{
//      console.log(req.body,req.file);
// });


router.get('/showall/profile',(req,res)=>{
    let perpage=5,page=5;
    if(req.query.perpage!==null && req.query.perpage!==undefined){
      perpage = req.query.perpage;   
    }
    if(req.query.page!==null && req.query.page!==null){
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

router.get('/profile/company/:id',(req,res)=>{
         userDb.companyProfile(req.params.id)
         .then((data)=>{
              res.json({data:data,msg:'success'});
         })
         .catch((err)=>{
              res.json({error:err.message});
         })
});

router.put('/status/:id',(req,res)=>{     //update the user status
     userDb.updateStatus(req.params.id)
     .then((data)=>{
         res.json({data:data,msg:"success"});
     })  
     .catch((err)=>{
         res.json({error:err.message});
     })   
});

module.exports = router;