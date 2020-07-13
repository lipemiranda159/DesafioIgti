import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv-safe";
import UserService from "../services/userService";
dotenv.config();

class Login {
  private _userService: UserService;

  constructor() {
    this._userService = new UserService();
  }

  Login = (request: Request, response: Response) => {
    const { user, pwd } = request.body;

    if (this._userService.verifyInfo(user, pwd)) {
      const id = 1;
      const secret = process.env.SECRET ? process.env.SECRET : "";
      var token = jwt.sign({ id }, secret, {
        expiresIn: 3000,
      });
      return response.json({ auth: true, token: token });
    }

    response.status(500).json({ message: "Login inválido!" });
  };

  Logout = (request: Request, response: Response) => {
    response.json({ auth: false, token: null });
  };

  verifyJWT = (request: Request, response: Response, next: NextFunction) => {
    var token = request.headers["x-access-token"]?.toString();
    const secret = process.env.SECRET ? process.env.SECRET : "";

    if (!token) {
      return response
        .status(401)
        .json({ auth: false, message: "No token provided." });
    } else {
      jwt.verify(token, secret, function (err: any, decoded: any) {
        if (err)
          return response
            .status(500)
            .json({ auth: false, message: "Failed to authenticate token." });

        response.send({ userId: decoded.id });
        next();
      });
    }
  };
}

export default Login;
