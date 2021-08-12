const multer = require("multer");
const {uuid} = require("uuidv4");
const path   = require("path");

const storage  = multer.diskStorage({
    destination:(req,file,cb)=>{
         cb(null,'public/uploads');
    }, 
    filename:(req,file,cb)=>{
        fname = file.fieldname+uuid();
        cb(null,fname+path.extname(file.originalname)); 
    }
});

const upload = multer({
    storage:storage,
    fileFilter:(req,file,cb)=>{
         const ext = path.extname(file.originalname);  
        if(ext!=='.pdf' && ext!=='.doc' && ext!=='.docx'){
           cb(null,false);
           return cb(new Error('upload the resume in pdf/doc/docx format'));
        }
        else{
            cb(null,true);
        }
    },
    limits:{
        fileSize:1024*1024
    }
}).single('pic');


 const multerMidleware = function multerUploadMiddleware(uploads){
    return (req, res, next) =>
    uploads(req, res, function (err) {
     // handle Multer error
     if (err && err.name && err.name === 'MulterError') {
      return res.status(500).send({
          error: err.name,
          message: `File upload error: ${err.message}`,
      });
  }
        // handle other errors
        if (err) {
          console.log(err.message);
            return res.status(500).send({
                error: 'FILE UPLOAD ERROR',
                message: err.message,
            });
        }
  
            next();
          });
 }

 module.exports ={
    upload,
    multerMidleware
  }