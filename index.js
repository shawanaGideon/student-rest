const express = require("express");
const colors = require("colors");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 4000;
const studentRoute = require("../server/routes/student.server.routes.js");

const connectDB = require("./config/db.js");

const app = express();

app.use(cors());

// connct to Database
connectDB();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/students", studentRoute);

app.listen(port, console.log(`Server is running on port ${port}`));
