import axios from "axios";

class UserService {
  async notifyUserService(user: any) {
    console.log("Notifying user-service");
    try {
      console.log(process.env.USER_SERVICE_URL);
      await axios.post(`${process.env.USER_SERVICE_URL}/register`, user);
    } catch (error) {
      console.error("Error notifying user-service", error);
      // throw error;
    }
  }
}

export default new UserService();
