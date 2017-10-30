require("dotenv").config();
const express = require('express')
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const db = require("./dbconfig.js")

app.use(bodyParser.urlencoded({ extended: "true" }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "client")));

// app.get('/', (req, res) => {
//   res.send('Node Working');
// })

app.post('/api/beer', (req,res) => {
  console.log(req.body);
  res.send("Post Worked");
})


app.listen(process.env.PORT, () => {
  console.log(`Listening on ${process.env.PORT}`);
});