import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
const UserSchema = new Schema({
  nomeUser: {
    type: String,
    required: true,
    unique: true
    
  },
  password: {
    type: String,
    required:true
    
  },
  
});

UserSchema.pre('save', async function(next){
  this.password = await bcrypt.hash(this.password,10)
  next()
})

export default model("User",  UserSchema);
