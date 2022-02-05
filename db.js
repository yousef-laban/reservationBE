const mongoose = require("mongoose");

const connectDB = async () => {
  const uri =
    "mongodb+srv://yousef:0795848858@cluster0.pfyb1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

  const conn = await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const connection = mongoose.connection;
  connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
  });
};

module.exports = connectDB;
