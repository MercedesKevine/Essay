(function() {
'use strict';

  angular
      .module('savecontactapp')
      .config(stateConfig);

  stateConfig.$inject = ['$stateProvider'];

  function stateConfig($stateProvider) {
      $stateProvider.state('home', {
          parent: 'app',
          url: '/',
          views: {
              'homeContent@': {
                  templateUrl: 'partials/subscriber.user.html',
                  controller: 'HomeController',
                  controllerAs: 'vm'
              }
          }
      });
  }
})();
