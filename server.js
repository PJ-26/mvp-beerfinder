require("dotenv").config();
const express = require('express')
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const db = require("./dbconfig.js")

app.use(bodyParser.urlencoded({ extended: "true" }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "client")));

app.get('/api/mybeers', (req, res) => {
  db.Beer.find({}, function(err, beers) {
    if(err) console.log(err);
    res.send(beers);
  })
})

app.post('/api/mybeers', (req,res) => {
  let newBeer = new db.Beer({
    name: req.body.name,
    image: req.body.image_url,
    brewed: req.body.first_brewed,
    description: req.body.description,
    abv: req.body.abv,
    toDrink: true
  })
  newBeer.save(err => console.log(err || newBeer));
  res.send("Post Worked");
})

app.delete("/api/mybeers/:beer_id", (req, res) => {
  db.Beer.remove({ _id: req.params.beer_id }, (err, session) => {
    if (err) console.error(err);
    else {
      console.log("DELETED");
    }
  });
  res.send(`${req.params.beer_id} Deleted!`);
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on ${process.env.PORT}`);
}); 