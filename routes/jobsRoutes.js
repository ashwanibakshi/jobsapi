const express    = require('express');
const jobDb      = require('../db/jobDB');

const router    = express.Router();

router.post('/add',(req,res)=>{
     jobDb.addJob(req.body)
     .then((data)=>{
         res.json({data:data,msg:'success'});
     })
     .catch((err)=>{
         res.json({error:err.message});
     })
});

router.get('/edit/:id',(req,res)=>{
      jobDb.editJob(req.params.id)
      .then((data)=>{
           res.json({data:data,msg:'suceess'});
      })
      .catch((err)=>{
           res.json({error:err.message});
      })
});

router.delete('/remove/:id',(req,res)=>{
      jobDb.deleteJob(req.params.id)
      .then((data)=>{
           res.json({data:data,msg:'success'});
      })
      .catch((err)=>{
           res.json({error:err.message});
      })
});

router.get('/company/showall/:cid',(req,res)=>{
       jobDb.showCompanyJobs(req.params.cid)
       .then((data)=>{
           res.json({data:data,msg:'success'});
       })
       .catch((err)=>{
           res.json({error:err.message});
       })
});

module.exports = router;

