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

module.exports.Beer = Beer;
