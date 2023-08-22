import { UserModel } from "../db/models/user-schema.js";

export const userController={
    login(request,response){
        const userInfo=request.body;
        // console.log('Request Body is ',body);
        if(userInfo.userid==userInfo.passward){
            response.json({message:'Welcome '+userInfo.userid});
        }else{
            response.json({message:'Invalid Userid or Password'});
        }
        
    },
    async register(request,response){
        const userInfo= request.body;
        try{
            const doc=await UserModel.create(userInfo);
            if(doc&&doc._id){
                response.json({message:'Registered Successfully'});    
            }
            else{
                response.json({message:'Problem in Register'});
            }
        }
       catch(err){
        console.log('Registration error',err);
        response.json({message:'Problem in Register'});
       }
    },
    profile(request,response){
        const userName=request.params.username;
        const work=request.params.work;
        console.log('all params ',userName);
        console.log(userName," is ",work);
        response.json({message:userName +' profile'});
    },
    changePassword(request,response){
        response.json({message:'Change Password'});
    }
}