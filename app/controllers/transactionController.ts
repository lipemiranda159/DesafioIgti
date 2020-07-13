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
    const { take } = request.params;
    try {
      let result = await this.accountService.GetAllTransactions(
        this.NoFilterTransaction
      );
      if (take) {
        //result = result.slice(0, parseInt(take.toString()));
      }
      response.send(result);
    } catch (e) {
      const codeError = this.getErrorCode(e);
      response.status(codeError).send({ res: `${e}` });
    }
  };

  getTransaction = async (request: Request, response: Response) => {
    try {
      const { id } = request.body;
      if (id) {
        const result = await this.accountService.getTrasaction(id);
        response.send(result);
      }
    } catch (e) {
      const codeError = this.getErrorCode(e);
      response.status(codeError).send({ res: `${e}` });
    }
  };

  updateTransaction = async (request: Request, response: Response) => {
    try {
      const { id } = request.body;
      if (id) {
        const result = await this.accountService.updateTrasaction(id);
        response.send(result);
      }
    } catch (e) {
      const codeError = this.getErrorCode(e);
      response.status(codeError).send({ res: `${e}` });
    }
  };

  addTransaction = async (request: Request, response: Response) => {
    try {
      this.accountService.addTransaction(request.body);
      response.send("ok");
    } catch (e) {
      const codeError = this.getErrorCode(e);
      response.status(codeError).send({ res: `${e}` });
    }
  };

  deleteTransaction = async (request: Request, response: Response) => {
    try {
      const { id } = request.body;
      if (id) {
        const result = await this.accountService.getTrasaction(id);
        response.send(result);
      }

      response.send(await this.accountService.deleteTransaction(id));
    } catch (e) {
      const codeError = this.getErrorCode(e);
      response.status(codeError).send({ res: `${e}` });
    }
  };
}

export default TransactionController;
