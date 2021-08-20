const express    = require('express');
const jobDb      = require('../db/jobDB');

const router    = express.Router();


/**
 * @api {post} /job/add     add_job
 * @apiName  add_job
 * @apiGroup jobs
 * 
 * @apiParam {String} cid              companyid(_id)
 * @apiParam {String} title            job title
 * @apiParam {String} description      job description
 * @apiParam {String} qualification    job qualification
 * @apiParam {String} tags             tags  
 * 
 * @apiSuccessExample Success-Response:
{
    "data": {
        "status": "active",
        "_id": "611fe3c9f3270907649caddb",
        "cid": "610919bf70bd2022749c8d5b",
        "title": "js developer",
        "description": "this is a javascript developer job.Having 1 or more year experience",
        "qualification": "bca,btech,mca",
        "tags": "javascript",
        "__v": 0
    },
    "msg": "success"
}
 */
router.post('/add',(req,res)=>{
     jobDb.addJob(req.body)
     .then((data)=>{
         res.json({data:data,msg:'success'});
     })
     .catch((err)=>{
         res.json({error:err.message});
     })
});


/**
 * @api {post} /job/edit/:id     edit_job
 * @apiName  edit_job
 * @apiGroup jobs
 * 
 * @apiParam {String} id              jobid(_id)
 * 
 * @apiSuccessExample Success-Response:
{
    "data": {
        "status": "active",
        "_id": "611fe3c9f3270907649caddb",
        "cid": "610919bf70bd2022749c8d5b",
        "title": "js developer",
        "description": "this is a javascript developer job. for a one year experience",
        "qualification": "bca,btech,mca",
        "tags": "javascript",
        "__v": 0
    },
    "msg": "suceess"
}
 */
router.get('/edit/:id',(req,res)=>{
      jobDb.editJob(req.params.id)
      .then((data)=>{
           res.json({data:data,msg:'suceess'});
      })
      .catch((err)=>{
           res.json({error:err.message});
      })
});

/**
 * @api {post} /job/remove/:id     remove_job
 * @apiName  remove_job
 * @apiGroup jobs
 * 
 * @apiParam {String} id              jobid(_id)
 * 
 * @apiSuccessExample Success-Response:
{
    "data": {
        "status": "active",
        "_id": "611fe3c9f3270907649caddb",
        "cid": "610919bf70bd2022749c8d5b",
        "title": "js developer",
        "description": "this is a javascript developer job. for a one year experience",
        "qualification": "bca,btech,mca",
        "tags": "javascript",
        "__v": 0
    },
    "msg": "suceess"
}
 */
router.delete('/remove/:id',(req,res)=>{
      jobDb.deleteJob(req.params.id)
      .then((data)=>{
           res.json({data:data,msg:'success'});
      })
      .catch((err)=>{
           res.json({error:err.message});
      })
});


/**
 * @api {get} /job/company/showall/:cid     showAllCompany_Jobs
 * @apiName  showAllCompany_Jobs
 * @apiGroup jobs
 * 
 * @apiParam {String} cid              companyid(_id)
 * 
 * @apiSuccessExample Success-Response:
{
     "data": [
         {
             "status": "active",
             "_id": "610bf0c1d4f5b20304e1ff35",
             "cid": "610919bf70bd2022749c8d5b",
             "title": "need custom web site",
             "description": "want a custom web site in php",
             "qualification": "bca,mca",
             "tags": "php,mysql",
             "__v": 0
         },
         {
             "status": "active",
             "_id": "611fe3c9f3270907649caddb",
             "cid": "610919bf70bd2022749c8d5b",
             "title": "js developer",
             "description": "this is a javascript developer job. for a one year experience",
             "qualification": "bca,btech,mca",
             "tags": "javascript",
             "__v": 0
         }
     ],
     "msg": "success"
 }
 */
router.get('/company/showall/:cid',(req,res)=>{
       jobDb.showCompanyJobs(req.params.cid)
       .then((data)=>{
           res.json({data:data,msg:'success'});
       })
       .catch((err)=>{
           res.json({error:err.message});
       })
});

router.post('/apply',(req,res)=>{
     jobDb.applyForJob(req.body)
     .then((data)=>{
          res.json({data:data,msg:"success"});
     })
     .catch((err)=>{
           res.json({error:err.message});
     })
});

router.get('/applied/showall/:id',(req,res)=>{ //all jobs applied by user
        jobDb.showAllAppliedJob(req.params.id)
        .then((data)=>{
            res.json({data:data,msg:"success"});
        })
        .catch((err)=>{
            res.json({error:err.message});
        })
});

router.get('/showallapplication/:id',(req,res)=>{  //shows all the application came for the job
      jobDb.showAllApplications(req.params.id)
      .then((data)=>{
          res.json({data:data,msg:'success'});   
      })
      .catch((err)=>{
           res.json({error:err.message});
      })
});




module.exports = router;