const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const { notFound, errorHandler } = require("./middelwares/errorHandler");
//************ Routes import************

//************middel ware ******************
app.use(notFound);
app.use(errorHandler);
module.exports = app;
