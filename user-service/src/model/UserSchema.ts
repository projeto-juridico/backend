import exp from "constants";
import mongoose from "mongoose";

interface IUser {
  name: string;
  email: string;
}

const User = mongoose.model<IUser>("User", new mongoose.Schema({}));

export default User;
