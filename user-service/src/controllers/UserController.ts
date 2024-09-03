import { Request, Response } from "express";
import UserService from "../service/UserService";

class UserController {
  async create(req: Request, res: Response) {
    // code to create a new user
    const user = await UserService.createUser(req.body);
    console.log(user);
    return res.status(201).send(user);
  }
}

export default new UserController();
