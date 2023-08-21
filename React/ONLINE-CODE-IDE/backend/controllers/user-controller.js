export const userController={
    login(request,response){
        response.json({message:'login'});
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