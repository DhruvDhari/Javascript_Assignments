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
    register(request,response){
        response.json({message:'register'});
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