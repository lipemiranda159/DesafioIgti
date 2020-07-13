import express from "express";
import Login from "../controllers/usersController";
const transactionRouter = express.Router();
const login = new Login();

/**
 * Rota raiz
 */
transactionRouter.get("/api/", login.verifyJWT, (_, response) => {
  response.send({
    message:
      "Bem-vindo à API de lançamentos. Acesse /transaction e siga as orientações",
  });
});

export default transactionRouter;
