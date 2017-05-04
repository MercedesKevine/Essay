(function () {
    'use strict';

    angular
            .module('savecontactapp')
            .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig ($stateProvider) {
        $stateProvider
                .state('user', {
                    parent: 'module',
                    url: '/users',
                    views: {
                        'moduleContent@home': {
                            templateUrl: 'modules/users/views/users.list.html',
                            controller: 'UserController',
                            controllerAs: 'vm'
                        }
                    }
                })
                .state('user.detail', {
                    parent: 'user',
                    url: '/user/{_id}',
                    onEnter: ['$stateParams', '$state', '$uibModal', function ($stateParams, $state, $uibModal) {
                            $uibModal.open({
                                templateUrl: 'modules/users/views/user.detail.html',
                                controller: 'UserDialogController',
                                controllerAs: 'vm',
                                backdrop: 'static',
                                size: 'lg',
                                resolve: {
                                    entity: ['User', function (User) {
                                            console.log("valeur de id" + $stateParams._id);
                                            return User.get({_id: $stateParams._id}).$promise;
                                        }]
                                }
                            })
                                    .result.then(function () {
                                        $state.go('user', null, {reload: true});
                                    }, function () {
                                        $state.go('user');
                                    });
                        }]
                })
                .state('user.new', {
                    parent: 'user',
                    url: '/new',
                    onEnter: ['$stateParams', '$state', '$uibModal', function ($stateParams, $state, $uibModal) {
                            $uibModal.open({
                                templateUrl: 'modules/users/views/user.create.html',
                                controller: 'UserDialogController',
                                controllerAs: 'vm',
                                backdrop: 'static',
                                size: 'lg',
                                resolve: {
                                    entity: function () {
                                        return {
                                            firstname: null,
                                            lastname: null,
                                            genre: null,
                                            email: null,
                                            _id: null
                                        };
                                    }
                                }
                            }).result.then(function () {
                                $state.go('user', null, {reload: true});
                            }, function () {
                                $state.go('user');
                            });
                        }]
                })
                .state('user.edit', {
                    parent: 'user',
                    url: '/{_id}/edit',
                    onEnter: ['$stateParams', '$state', '$uibModal', function ($stateParams, $state, $uibModal) {
                            $uibModal.open({
                                templateUrl: 'modules/users/views/user.edit.html',
                                controller: 'UserDialogController',
                                controllerAs: 'vm',
                                backdrop: 'static',
                                size: 'md',
                                resolve: {
                                    entity: ['User', function (User) {
                                        console.log("valeur de id" + $stateParams._id);
                                            return User.get({_id: $stateParams._id}).$promise;
                                        }]
                                }
                            }).result.then(function () {
                                $state.go('user', null, {reload: true});
                            }, function () {
                                $state.go('^');
                            });
                        }]
                })
                .state('user.delete', {
                    parent: 'user',
                    url: '/{_id}/delete',
                    onEnter: ['$stateParams', '$state', '$uibModal', function ($stateParams, $state, $uibModal) {
                            $uibModal.open({
                                templateUrl: 'modules/users/views/user.delete.html',
                                controller: 'UserDeleteController',
                                controllerAs: 'vm',
                                size: 'md',
                                resolve: {
                                  entity: ['User', function (User) {
                                          console.log("valeur de id peut etre ..." + $stateParams._id);
                                          return User.get({_id: $stateParams._id}).$promise;
                                      }]
                                }
                            }).result.then(function () {
                                $state.go('user', null, {reload: true});
                            }, function () {
                                $state.go('^');
                            });
                        }]
                })
            }

})();
