(function () {
    'use strict';

    angular
            .module('savecontactapp')
            .controller('SubscriberController', SubscriberController)
            .controller('SubscriberDialogController', SubscriberDialogController)
            .controller('SubscriberDeleteController', SubscriberDeleteController);


    //============  Generale Client Controller  ======================//

    SubscriberController.$inject = [ 'Subscriber'];

    function SubscriberController(Subscriber) {
        var vm = this;
        vm.loadAll = loadAll;

        loadAll();

        function loadAll() {

            Subscriber.query(null, onSuccess, onError);

            function onSuccess(data, headers) {
                vm.subscribers = data;
                //console.log('je suis ...'+data[0]._id);
            }
            function onError(error) {
                Console.log(error.data.message);
            }
        }

    };

    //============  Client dialog controller ====================//

    SubscriberDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'Subscriber'];

    function SubscriberDialogController($timeout, $scope, $stateParams, $uibModalInstance, entity, Subscriber) {

    var vm = this;

        vm.subscriber = entity;
        vm.clear =clear;
        vm.save = save;

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
        console.log("mon non est ..."+vm.subscriber._id);
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.subscriber._id != null) {
               console.log("vm.subscriber._id = "+vm.subscriber._id+" vm.subscriber.lastName = "+vm.subscriber.lastName);
                Subscriber.update({_id : vm.subscriber._id} ,vm.subscriber, onSaveSuccess, onSaveError);
            } else {
                Subscriber.save(vm.subscriber, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('savecontactapp :subscriberUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }
    };

    //============  Client delete controller ====================//

    SubscriberDeleteController.$inject = ['$uibModalInstance', 'Subscriber','entity'];

    function  SubscriberDeleteController($uibModalInstance,Subscriber,entity) {
         var vm = this;

        vm.subscriber = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (_id) {
              Subscriber.delete({_id: _id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }

})();
