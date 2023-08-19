console.log('hi node js');

// console.log("start")
// const fs =require('fs');
// const filepath='Users/lenono/OneDrive/Desktop/COLLEGE_MERN/My_Assignments/Javascript_Assignments/React/ONLINE-CODE-IDE/node-code/sample.txt'
// fs.readFile(filepath,(err,content)=>{
//     if(err){
//         console.log('unable to read file ',err);
//     }else{
//         console.log('file content is ',content.toString);
//     }
// }); //Async hoga
// console.log("current :",filepath);
// console.log("end");
console.log("yeh toh buss shuruwat h")
const fs=require('fs');

fs.readFile(__dirname+"/sample.txt",(err,content)=>{
    if(err){
        console.log('Unable to read file',err);
    }
    else{
        console.log('File Content is ',content.toString());
    }
});//async style mai hoga

fs.readFile(__filename,(err,content)=>{
    if(err){
        console.log('Unable to read file',err);
    }
    else{
        console.log('*File Content is ',content.toString());
    }
});

console.log('code ends');