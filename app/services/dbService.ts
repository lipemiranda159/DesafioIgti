import mongoose from "mongoose";
import schema from "../models/TransactionModel";
import userSchema from "../models/UserModel";
class DbService {
  ObjectId = mongoose.Types.ObjectId;
  private createdModel = false;
  private dbContext: any;

  connect = async () => {
    try {
      const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-kvtie.gcp.mongodb.net/Igti?retryWrites=true&w=majority`;

      await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      if (!this.createdModel) {
        this.dbContext = mongoose.model("transaction", schema);
        this.createdModel = true;
      }
    } catch (error) {
      console.log(`err: ${error}`);
      throw error;
    }
  };

  getAllTransactions = async (filter: any | undefined) => {
    try {
      return filter
        ? await this.dbContext.find({ filter })
        : await this.dbContext.find({});
    } catch (error) {
      return error;
    }
  };

  deleteAccount = async (filter: any) => {
    await this.dbContext.deleteOne(filter);
  };

  save = async (obj: any) => {
    this.dbContext.save(obj);
  };
}

export default DbService;
