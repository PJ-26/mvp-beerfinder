const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");

mongoose
  .connect(process.env.MONGO_URI, { useMongoClient: true })
  .then(({ db: { databaseName } }) =>
    console.log(`Connected to ${databaseName}`)
  )
  .catch(err => console.error(err));  

const beerSchema = mongoose.Schema({
  name: String,
  image: String,
  brewed: String,
  description: String,
  abv: Number, 
  toDrink: Boolean
});

const Beer = mongoose.model("Beer", beerSchema);

const insertBeer = beer =>
  new Beer(beer).save((err, newBeer) =>
    console.log(err || newBeer)
  );

  //Test Beer
// let newBeer = new Beer({
//   name: "Test Beer",
//   image: "https://images.punkapi.com/v2/keg.png",
//   brewed: "09/2007",
//   description: "Test Description",
//   abv: 4.5,
//   toDrink: true
// });

// newBeer.save(err => console.log(err || newBeer));

module.exports.Beer = Beer;
