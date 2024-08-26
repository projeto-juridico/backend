import axios from "axios";

class UserService {
  async notifyUserService(user: any) {
    console.log("Notifying user-service");
    try {
      await axios.post(`${process.env.USER_SERVICE_URL}/users`, user);
    } catch (error) {
      console.error("Error notifying user-service", error);
      // throw error;
    }
  }
}

export default new UserService();
