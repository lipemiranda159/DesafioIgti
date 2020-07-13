class TransactionService {
  updateTrasaction(id: any) {
    throw new Error("Method not implemented.");
  }
  deleteTransaction(id: String): any {
    throw new Error("Method not implemented.");
  }
  addTransaction(body: any) {
    throw new Error("Method not implemented.");
  }
  getTrasaction = async (id: String) => {
    console.log(id);
  };
  GetAllTransactions = async (NoFilterBalance: any) => {
    return "";
  };
}

export default TransactionService;
