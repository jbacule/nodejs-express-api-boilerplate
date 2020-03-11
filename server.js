const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const apiController = require("./api/routes");

const app = express();

app.use(bodyParser.json());

//API Handler
apiController(app);

//Error Handler
app.use(require('./api/handlers/error'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running in port: ${port}`));