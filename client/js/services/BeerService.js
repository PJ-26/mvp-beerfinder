angular.module("BeerService", [])
.factory("Beers", ["$http", function($http) {
    return {
      // call to get all beers
      get: function() {
        return $http.get("https://api.punkapi.com/v2/beers");
      },

      // these will work when more API routes are defined on the Node side of things
      // call to POST and create a new nerd
      create: function(nerdData) {
        return $http.post("/api/beers", nerdData);
      },

      // call to DELETE a nerd
      delete: function(id) {
        return $http.delete("/api/beers/" + id);
      }
    };
  }
]);
