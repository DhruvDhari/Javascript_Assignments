const express =require('express');

const app=express();

app.use(express.static("public"));

app.get('/home',(request,response)=>{
    response.send("hello this is a server")
})

app.get('/urljson',(request,response)=>{
    response.json({'question':'this is a question','answer':'something'})
    // response.json({'answer':'mujhe kya pta '})
})

app.listen(4000,(err)=>{
    if(err){
        console.log("harkat spotted");
    }
    else{
        console.log("server started at port number 4000");
    }
    
})