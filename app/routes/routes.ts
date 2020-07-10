import express from "express";
const transactionRouter = express.Router();

/**
 * Rota raiz
 */
transactionRouter.get("/api/", (_, response) => {
  response.send({
    message:
      "Bem-vindo à API de lançamentos. Acesse /transaction e siga as orientações",
  });
});

export default transactionRouter;
