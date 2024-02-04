import mongoose from "mongoose";

const UserSachema = new Schema({
  
  email: {
    type: String,
    unique: true,
    required: [true, "Email Required !!"],
  },
  password: {
    type: String,
    require: [true, "Password Required !!"],
  },
  
 
});

const User =  mongoose.model("user", UserSachema);
export default User