class TransactionService {
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
    throw new Error("Method not implemented.");
  };
}

export default TransactionService;
