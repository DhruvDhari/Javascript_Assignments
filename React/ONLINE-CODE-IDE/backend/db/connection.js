const url='mongodb+srv://admin:admin123@mycluster.edilkzb.mongodb.net/userdb?retryWrites=true&w=majority';

import mongoose from "mongoose";
const promise = mongoose.connect(url);
promise.then(data=>{
    console.log('DB Connected ...')
}).catch(err=>{
    console.log('Error in Connecting to DB ',err);
}
)