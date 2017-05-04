

var app = angular.module('savecontactapp', [
    'ngResource',
    'ngAria',
    'ui.bootstrap',
    'ui.router'
]);

app.config(function ($stateProvider, $urlRouterProvider) {

   $urlRouterProvider.otherwise('/');

    $stateProvider
            .state('app', {
                abstract: true,
                views: {
                    'navbarContent@': {
                        templateUrl: 'partials/navbar.html',
                        controller: 'AppController',
                        controllerAs: 'vm'
                    },
                    'homeContent@':{}
                }

            })
            ;
});
