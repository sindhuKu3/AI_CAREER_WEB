const dotenv = require("dotenv");
dotenv.config();
const express = require("express");

const { db } = require("./db/db");
const app = express();
const PORT = process.env.PORT;

const path = require("path");
const cors = require("cors");

const studentRoute = require("./routes/student");
app.use(express.static(path.resolve(__dirname, "build")));
app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/student", studentRoute);

const server = () => {
  db();
  app.listen(PORT, () => {
    console.log(`server started at PORT ${PORT}`);
  });
};
server();
