import User, { User as UserInterface } from "../model/User";
const UserRepository = {
  findUserByEmail: async (email: string): Promise<UserInterface | null> => {
    return await User.findOne({ email });
  },

  createUser: async (user: UserInterface): Promise<UserInterface> => {
    return await User.create(user);
  },
};

export default UserRepository;
