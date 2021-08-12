const express   = require('express');
const mongoose  = require('mongoose');
const path      = require('path');


const app = express();

mongoose.connect('mongodb://localhost:27017/jobs',{useNewUrlParser:true,useCreateIndex:true,useFindAndModify:true})
.then(()=>{console.log('connected to db')})
.catch((err)=>{console.log('connection err',err)})

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.resolve(__dirname,'public')));

app.use('/api/v1',require('./routes/routes'));

const port  = process.env.PORT || 3000;
app.listen(port,()=>console.log(`server run at port${port}`));