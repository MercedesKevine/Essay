(function () {
    'use strict';

    angular
            .module('savecontactapp')
            .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('module', {
            abstract: true,
            parent: 'home'
        });
    }
})();
