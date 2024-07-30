const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const path = require('path')
const routes = require("./routes");

require("dotenv").config();

const app = express();
app.use(cookieParser());
const PORT = 7000

app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_LINK,
    credentials: true,
  })
);

app.use(express.static(path.join(__dirname, '../client/build')));

console.log(path.join(__dirname, '../client/build'))
// Catch-all route to serve index.html for all non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

mongoose.connect(`${process.env.DB_CONNECTION_STRING}`);

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});