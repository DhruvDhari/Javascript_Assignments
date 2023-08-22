import mongoose, { SchemaType } from "mongoose";
const Schema=mongoose.Schema;

const userSchema= new Schema({
    'email':{type:Schema.Types.String,required:true,unique:true},
    'password':{type:SchemaType.String,required:true,minLength:8,maxLength:25},
    'name':{type:SchemaType.String,required:true},
    'phone':{type:SchemaType.string}
});

export const UserModel = mongoose.model('users',userSchema);