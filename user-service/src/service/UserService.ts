import User from "../model/UserSchema";
import { IUser } from "../vos/UserRequestVO";

const UserService = {
  async getUserById(id: number) {
    return { id, name: "John Doe" };
  },

  async createUser(user: IUser) {
    User.create(user);
    return { message: "Ok" };
  },
};

export default UserService;
