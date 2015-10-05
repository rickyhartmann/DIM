(function() {
  'use strict';

  angular.module('app.shell').controller('HomeCtrl', homeCtrl);

  homeCtrl.$inject = ['$scope', '$state', 'principal'];

  function homeCtrl($scope, $state, principal) {
    principal.identity()
      .then((identity) => {
        $scope.username = identity.name;
      });

    $scope.signout = function() {
      principal.authenticate(null);
      $state.go('signin');
    };

    $scope.vaultChangeCol = function(width) {
      $scope.vaultCustomColumns = "col-xl-"+(Math.round(width/2));
    }

    $scope.invChangeCol = function(width){
      $scope.inventoryCustomColumns = "col-xl-"+(Math.round(width/2));
    }
  }
}());
