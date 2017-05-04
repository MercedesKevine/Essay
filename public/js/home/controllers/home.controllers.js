(function() {
    'use strict';

    angular
        .module('savecontactapp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', '$state'];

    function HomeController ($scope, $state) {

       $scope.help ="That is initial step ;please we are working it now, thank ...";

         //update different pages ...
         $scope.actualisation = function () {
             $scope.tab = 1;
             $state.go('user');
          };
         $scope.actualisation();

          $scope.isSet = function(checkTab) {
            return $scope.tab === checkTab;
          };

          $scope.setTab = function(activeTab) {
            $scope.tab = activeTab;
          };
            $scope.onclickUser = function () {
                $scope.setTab(1)
                $state.go('user');
          };
           $scope.onclickSubscriber = function () {
                $scope.setTab(2)
                // $state.go('compte');
          };
    }
})();
