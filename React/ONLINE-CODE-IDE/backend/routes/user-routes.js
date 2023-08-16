import express from 'express';


export const userRoutes=express.Router();

userRoutes.get('/profile')//get is to read
userRoutes.post('/login')//post is to write
userRoutes.post('register')
// userRoutes.put('/change-password')
// userRoutes.delete('/remove-account')


