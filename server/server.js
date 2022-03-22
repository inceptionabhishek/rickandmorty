const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_URI;
mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// routes

app.use("/favourite", require("./routes/favourite.js"));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
