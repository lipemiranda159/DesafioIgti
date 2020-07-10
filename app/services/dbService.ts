import mongoose from "mongoose";
import schema from "../models/TransactionModel";
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
}
