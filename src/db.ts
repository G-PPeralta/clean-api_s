const { MongoClient } = require("mongodb");
require("dotenv").config();

const uri =
  "mongodb+srv://pratesperalta:kKilSdSknHrSMIoS@cluster0.ehqas9f.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas");
  } catch (err) {
    console.error(err);
  }
  return client.db(process.env.DB_NAME);
}
