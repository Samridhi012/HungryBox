import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  cartData: { type: Object, default: {} },
  resetPasswordToken: { type: String },
  resetPasswordExpires: { type: Date },
  subscription: { type: Boolean, default: false },
});

const userModel = mongoose.model("user", userSchema);

export default userModel;
