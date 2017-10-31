angular
  .module("AddYourOwnCtrl", ['BeerService'])
  .controller("AddYourOwnController", function($scope, Beers) {
    $scope.userBeer = {};
    $scope.addUserBeer = () => {
      console.log($scope.userBeer);
    }
  });
