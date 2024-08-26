import mongoose, { Document, Schema } from "mongoose";
import RoleEnum from "../enum/RoleEnum";

interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: RoleEnum;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: RoleEnum.USER },
  },
  {
    timestamps: true,
  }
);

UserSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  delete obj.role;
  delete obj.createdAt;
  delete obj.updatedAt;
  delete obj._id;
  delete obj.__v;
  return obj;
};

const User = mongoose.model<IUser>("User", UserSchema);

export default User;
