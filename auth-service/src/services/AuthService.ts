import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import RoleEnum from "../enum/RoleEnum";
import User from "../model/User";
import UserService from "./UserService";
import e from "express";

class AuthService {
  async register(userData: any) {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(userData.password, saltRounds);
    console.log("Entrei na controller");
    const user = new User({
      name: userData.name,
      email: userData.email,
      password: hashedPassword,
      role: userData.role ?? RoleEnum.USER,
    });
    console.log(user);

    await user.save();
    console.log("Salvei o usuário");
    await UserService.notifyUserService(user);

    return user.toJSON();
  }

  async login(email: string, password: string) {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User not found");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Invalid credentials");
    }

    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET!,
      { expiresIn: "1h" }
    );

    return { token, expiresIn: 3600, tokenType: "Bearer" };
  }

  verifyToken(token: string) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET!);
      return decoded;
    } catch (error) {
      throw new Error("Invalid token");
    }
  }
}

export default new AuthService();
