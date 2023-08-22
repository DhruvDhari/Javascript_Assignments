import { UserModel } from "../db/models/user-schema.js";
import { hashing } from "../utils/encrypt.js";

export const userController={
    async login(request,response){
        const userInfo=request.body;
        console.log('Request Body is ',userInfo);
        // if(userInfo.userid==userInfo.password){
        //     response.json({message:'Welcome '+userInfo.userid});
        // }else{
        //     response.json({message:'Invalid Userid or Password'});
        // }

        const doc=await UserModel.findOne({'email':userInfo.email}).exec();
        console.log('doc is',doc);
        
        if(doc && doc._id){
            const plainPassword = userInfo.password;
            const dbPassword=doc.password;
            if(hashing.matchPassword(plainPassword,dbPassword)){
                response.json({
                    message:`WELCOME ${doc.name}`
                })
            }else{
                response.json({
                    message:"Invalid UserId or Password"
                })
            }
        
        }else{
            response.json({
                message:"Invalid UserId or Password"
            })
        }
        
    },
    async register(request,response){
        const userInfo= request.body;
        userInfo.password= hashing.passwordHash(userInfo.password);
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