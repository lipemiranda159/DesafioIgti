import { Request, Response, request } from "express";
import TransactionService from "../services/transactionService";

class TransactionController {
  getErrorCode(e: any) {
    return 500;
  }
  private accountService: TransactionService;
  private NoFilterTransaction = undefined;
  constructor() {
    this.accountService = new TransactionService();
  }

  getTransactions = async (request: Request, response: Response) => {
    try {
      let result = await this.accountService.GetAllTransactions(
        this.NoFilterTransaction
      );
      response.send(result);
    } catch (e) {
      const codeError = this.getErrorCode(e);
      response.status(codeError).send({ res: `${e}` });
    }
  };

  getTransaction = async (request: Request, response: Response) => {
    try {
      const result = await this.accountService.getTrasaction();
      response.send(result);
    } catch (e) {
      const codeError = this.getErrorCode(e);
      response.status(codeError).send({ res: `${e}` });
    }
  };

  addTransaction = async (request: Request, response: Response) => {
    try {
      this.accountService.addTransaction();
      response.send("ok");
    } catch (e) {
      const codeError = this.getErrorCode(e);
      response.status(codeError).send({ res: `${e}` });
    }
  };

  deleteTransaction = async (request: Request, response: Response) => {
    try {
      response.send(await this.accountService.deleteTransaction());
    } catch (e) {
      const codeError = this.getErrorCode(e);
      response.status(codeError).send({ res: `${e}` });
    }
  };
}

export default TransactionController;
