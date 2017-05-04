(function () {
    'use strict';

    angular
            .module('savecontactapp')
            .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig ($stateProvider) {
        $stateProvider
                .state('subscriber', {
                    parent: 'module',
                    url: '/subscribers',
                    views: {
                        'moduleContent@home': {
                            templateUrl: 'modules/subscribers/views/subscribers.list.html',
                            controller: 'SubscriberController',
                            controllerAs: 'vm'
                           // console.log('bonjour subscriber');
                        }
                    }
                })
                .state('subscriber.detail', {
                    parent: 'subscriber',
                    url: '/subscriber/{_id}',
                    onEnter: ['$stateParams', '$state', '$uibModal', function ($stateParams, $state, $uibModal) {
                            $uibModal.open({
                                templateUrl: 'modules/subscribers/views/subscriber.detail.html',
                                controller: 'SubscriberDialogController',
                                controllerAs: 'vm',
                                backdrop: 'static',
                                size: 'lg',
                                resolve: {
                                    entity: ['Subscriber', function (Subscriber) {
                                            console.log("valeur de id" + $stateParams._id);
                                            return Subscriber.get({_id: $stateParams._id}).$promise;
                                        }]
                                }
                            })
                                    .result.then(function () {
                                        $state.go('subscriber', null, {reload: true});
                                    }, function () {
                                        $state.go('subscriber');
                                    });
                        }]
                })
                .state('subscriber.contacts', {
                    parent: 'subscriber',
                    url: '/subscriber/{_id}',
                    onEnter: ['$stateParams', '$state', '$uibModal', function ($stateParams, $state, $uibModal) {
                            $uibModal.open({
                                templateUrl: 'modules/subscribers/views/subscriber.contacts.html',
                                controller: 'SubscriberDialogController',
                                controllerAs: 'vm',
                                backdrop: 'static',
                                size: 'lg',
                                resolve: {
                                    entity: ['Subscriber', function (Subscriber) {
                                            console.log("valeur de id" + $stateParams._id);
                                            return Subscriber.get({_id: $stateParams._id}).$promise;
                                        }]
                                }
                            })
                                    .result.then(function () {
                                        $state.go('subscriber', null, {reload: true});
                                    }, function () {
                                        $state.go('subscriber');
                                    });
                        }]
                })
                .state('subscriber.new', {
                    parent: 'subscriber',
                    url: '/new',
                    onEnter: ['$stateParams', '$state', '$uibModal', function ($stateParams, $state, $uibModal) {
                            $uibModal.open({
                                templateUrl: 'modules/subscribers/views/subscriber.create.html',
                                controller: 'SubscriberDialogController',
                                controllerAs: 'vm',
                                backdrop: 'static',
                                size: 'lg',
                                resolve: {
                                    entity: function () {
                                        return {
                                                firstName : null,
                                                lastName : null,
                                                email: null,
                                                phoneNumber :null,
                                                password : null,
                                                idNIC : null
                                                //lastModifiedDate : Date,
                                                //lastModifiedUser : String,
                                                /*contacts:[{
                                                    name:String,
                                                    phoneNumber:String*/
                                        };
                                    }
                                }
                            }).result.then(function () {
                                $state.go('subscriber', null, {reload: true});
                            }, function () {
                                $state.go('subscriber');
                            });
                        }]
                })

          /*J N PIGE PAS BIEN POURQUOI ON A USE /{_ID}/EDIT/ */     
               

                .state('subscriber.edit', {
                    parent: 'subscriber',
                    url: '/{_id}/edit',
                    onEnter: ['$stateParams', '$state', '$uibModal', function ($stateParams, $state, $uibModal) {
                            $uibModal.open({
                                templateUrl: 'modules/subscribers/views/subscriber.edit.html',
                                controller: 'SubscriberDialogController',
                                controllerAs: 'vm',
                                backdrop: 'static',
                                size: 'md',
                                resolve: {
                                    entity: ['Subscriber', function (Subscriber) {
                                        console.log("valeur de id" + $stateParams._id);
                                            return Subscriber.get({_id: $stateParams._id}).$promise;
                                        }]
                                }
                            }).result.then(function () {
                                $state.go('subscriber', null, {reload: true});
                            }, function () {
                                $state.go('^');
                            });
                        }]
                })
                .state('subscriber.delete', {
                    parent: 'subscriber',
                    url: '/{_id}/delete',
                    onEnter: ['$stateParams', '$state', '$uibModal', function ($stateParams, $state, $uibModal) {
                            $uibModal.open({
                                templateUrl: 'modules/subscribers/views/subscriber.delete.html',
                                controller: 'SubscriberDeleteController',
                                controllerAs: 'vm',
                                size: 'md',
                                resolve: {
                                  entity: ['Subscriber', function (Subscriber) {
                                          console.log("valeur de id peut etre ..." + $stateParams._id);
                                          return Subscriber.get({_id: $stateParams._id}).$promise;
                                      }]
                                }
                            }).result.then(function () {
                                $state.go('subscriber', null, {reload: true});
                            }, function () {
                                $state.go('^');
                            });
                        }]
                })
            }

})();
