import express from 'express';
import { userController } from '../controllers/user-controller.js';
export const userRoutes =express.Router();


userRoutes.get('/profile/:username/:work',userController.profile);
userRoutes.post('/login',userController.login);
userRoutes.post('/register',userController.register);
// userRoutes.put('/change-password');
// userRoutes.delete('/remove-account');

// export default routes;

//get for reading only like profile
//post is for writing like login/signup
//put is for updation,changes like in password
//delete is for deletion 

//crud operation- create read update delete
