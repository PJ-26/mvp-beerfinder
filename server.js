const express = require('express')
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config();

app.get('/', (req, res) => {
  res.send('Node Working');
})

app.listen(process.env.PORT, () => {
  console.log(`Listening on ${process.env.PORT}`);
});