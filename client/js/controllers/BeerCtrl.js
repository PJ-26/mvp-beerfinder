angular.module("BeerCtrl", ['BeerService'])
.controller("BeerController", function($scope, Beers) {
  $scope.tagline = "Nothing beats a cold brew!";

  getMyBeers();

  function getMyBeers() {
    Beers.getMyBeers()
    .then(function(response) {
      $scope.myBeers = response.data;
      console.log($scope.myBeers);
    }, function(error) {
      $scope.status = "Unable to load beer data: " + error.message;
    });
  }
  
  $scope.removeMyBeer = (id) => {
    Beers.deleteMyBeer(id)
    .then(function(response) {
      getMyBeers();
      console.log(response);
    }, function(error) {
      console.log(error);
    })
    getMyBeers();
  }
});
