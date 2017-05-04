(function() {
    'use strict';

    angular
        .module('savecontactapp')
        .controller('AppController', ourController);

    ourController.$inject = ['$scope', '$state'];

    function ourController ($scope, $state) {
       $scope.information =" We invite you to give your suggestions,it helps us to upgrade this social App.Thanks for your kind attention ...";
    }
})();
