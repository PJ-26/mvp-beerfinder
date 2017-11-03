angular.module("BeerService", [])
.factory("Beers", ["$http", function($http) {
    return {
      getAllBeers: function() {
        return $http.get("https://api.punkapi.com/v2/beers");
      },

      saveBeer: function(beer) {
        return $http.post("/api/mybeers", beer);
      },

      getMyBeers: function() {
        return $http.get('/api/mybeers');
      },

      deleteMyBeer: function(id) {
        return $http.delete("/api/myBeers/" + id);
      }
    };
  }
]);
