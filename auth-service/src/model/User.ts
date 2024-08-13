import RoleEnum from "../enums/RoleEnum";

const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: false, unique: false },
  password: { type: String, required: false, unique: false },
  role: {
    type: String,
    enum: Object.values(RoleEnum),
    required: true,
    unique: false,
    default: RoleEnum.USER,
  },
});

const User = mongoose.model("User", userSchema);

User.findUserByEmail = async (email: string) => {
  return await User.findOne({ email });
};

export default User;

export interface User {
  email: string;
  name: string;
  password: string;
  role: RoleEnum;
}
