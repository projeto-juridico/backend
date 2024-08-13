import { User } from "../model/User";
import UserRepository from "../repository/UserRepository";
import bcrypt from "bcrypt";
const UserService = {
  createUser: async (user: User): Promise<User> => {
    user.password = await bcrypt.hash(user.password, 10);

    return await UserRepository.createUser(user);
  },
  validUser: async (email: string, password: string): Promise<User | null> => {
    const user = await UserRepository.findUserByEmail(email);

    if (!user) {
      throw new Error("User not found");
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      throw new Error("User not found");
    }

    return user;
  },
};

export default UserService;
