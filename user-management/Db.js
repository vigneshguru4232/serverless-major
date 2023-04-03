const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

let conn = null;

module.exports = connectDatabase = async (event, context) => {
  const uri =
    "mongodb+srv://vigneshguru134:admin@cluster0.algxzoj.mongodb.net/major-serverless?retryWrites=true&w=majority";

  if (conn == null) {
    console.log("....Creating new connection to the database.....");
    conn = await mongoose.connect(uri, { serverSelectionTimeoutMS: 5000 });
    console.log("....Database connected.....");
    return conn;
  }

  console.log("Connection alreay exist");
};
