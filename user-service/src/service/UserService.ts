const UserService = {
  async getUserById(id: number) {
    return { id, name: "John Doe" };
  },
};

export default UserService;
