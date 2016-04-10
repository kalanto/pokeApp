var app = angular.module('pokemon');

app.controller("control", function($scope, service){


$scope.pokeCardInfo =

$scope.getPoke = function(pokePicker){
   service.getPoke($scope.pokePicker).then(function(response){
      $scope.poke = response;
      $scope.pokeCardInfo = true;
   });

};

});
