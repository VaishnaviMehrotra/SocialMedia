const express = require('express');
const logger = require("morgan");
const cors = require("cors");
const dbInit = require("./config/db");
const helmet = require("helmet");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || "DEV";

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
if (NODE_ENV === "DEV") {
    app.use(logger("dev"));
  }
app.use(helmet({ contentSecurityPolicy: false }));

dbInit();

const postRoutes = require("./routes/post");
const commentRoutes = require("./routes/comment");

app.use("/api/post", postRoutes);
app.use("/api/comment", commentRoutes);

app.listen(PORT, ()=>{console.log(`listening to PORT ${PORT}`)});
