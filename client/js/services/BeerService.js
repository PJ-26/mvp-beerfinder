angular.module("BeerService", [])
.factory("Beers", ["$http", function($http) {
    return {
      // call to get all beers
      getAllBeers: function() {
        return $http.get("https://api.punkapi.com/v2/beers");
      },

      // these will work when more API routes are defined on the Node side of things
      // call to POST and create a new nerd
      saveBeer: function(beer) {
        return $http.post("/api/mybeers", beer);
      },

      getMyBeers: function() {
        return $http.get('/api/mybeers');
      },

      // call to DELETE a nerd
      deleteMyBeer: function(id) {
        return $http.delete("/api/myBeers/" + id);
      }
    };
  }
]);
