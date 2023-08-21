// // const express =require('express');
// import express from 'express';
// import { userRoutes } from './routes/user-routes.js';
// import {ideRoutes} from './routes/ide-routes.js';

// const app=express();

// // app.use(express.static("public"));
// app.use('/',userRoutes)
// app.use('/',ideRoutes)
// app.use((request,response,next)=>{
//     response.json({message :'invalid url'})
// })

// // app.get('/home',(request,response)=>{
// //     response.send("hello this is a server")
// // })

// // app.get('/urljson',(request,response)=>{
// //     response.json({'question':'this is a question','answer':'something'})
// //     // response.json({'answer':'mujhe kya pta '})
// // })



// const server=app.listen(1234,(err)=>{
//     if(err){
//         console.log("Server Crash ",err);
//     }
//     else{
//         console.log("server Up and Running on",server.address().port);
//     }
    
// })

// const express =require('express'); common.js way to use require to import

import express, { response } from 'express';//type :module in json file
import { userRoutes } from './routes/user-routes.js';
import { ideRoutes } from './routes/ide-routes.js';

const app=express();
app.use(express.json());
app.use('/',userRoutes);
// app.use('/',ideRoutes);
// last middleware 404
app.use((request,response,next)=>{
    response.json({message:'Invalid URL'});
})

const server=app.listen(1234,(err)=>{
    if(err){
        console.log('server crashed',err);
    }else{
        console.log('server up and running',server.address().port);
    }
})