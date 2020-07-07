import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique
    
  },
  password: {
    type: String,
    required:true
    
  },
  
});

export default model("User", Userchema);
