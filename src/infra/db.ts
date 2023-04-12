const { MongoClient } = require("mongodb");
require("dotenv").config();

const uri = process.env.DB_URI;

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
