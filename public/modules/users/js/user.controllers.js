(function () {
    'use strict';

    angular
            .module('savecontactapp')
            .controller('UserController', UserController)
            .controller('UserDialogController', UserDialogController)
            .controller('UserDeleteController', UserDeleteController);


    //============  Generale Client Controller  ======================//

    UserController.$inject = [ 'User'];

    function UserController(User) {
        var vm = this;
        vm.loadAll = loadAll;

        loadAll();

        function loadAll() {

            User.query(null, onSuccess, onError);

            function onSuccess(data, headers) {
                vm.users = data;
                //console.log('je suis ...'+data[0]._id);
            }
            function onError(error) {
                Console.log(error.data.message);
            }
        }

    };

    //============  Client dialog controller ====================//

    UserDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'User'];

    function UserDialogController($timeout, $scope, $stateParams, $uibModalInstance, entity, User) {

    var vm = this;

        vm.user = entity;
        vm.clear =clear;
        vm.save = save;

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
        console.log("mon non est ..."+vm.user._id);
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
        //    vm.isSaving = true;
            if (vm.user._id !== null) {
               console.log("vm.user._id = "+vm.user._id+" vm.user.lastName = "+vm.user.lastName);
                User.update({_id : vm.user._id} ,vm.user, onSaveSuccess, onSaveError);
            } else {
                User.save(vm.user, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('savecontactapp :userUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }
    };

    //============  Client delete controller ====================//

    UserDeleteController.$inject = ['$uibModalInstance', 'User','entity'];

    function   UserDeleteController($uibModalInstance,User,entity) {
         var vm = this;

        vm.user = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (_id) {
              User.delete({_id: _id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }

})();
