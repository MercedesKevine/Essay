//(function () {
//    'use strict';
//    angular
//            .module('banque')
//            .factory('Client', Client);
//
//    Client.$inject = ['$http', '$resource','$q'];
//
//    function Client($http,$resource, $q) {
//         var config = {
//            headers: {
//                'Content-Type': 'application/json'
//            }
//        };
//
//        return {
//
//		    getAllClients: function() {
//					return $http.get("clients/")//(/api)
//							.then(
//									function(response){
//										return response.data;
//									},
//									function(errResponse){
//										console.error('Error while fetching customers');
//										return $q.reject(errResponse);
//									}
//							);
//			},
//		    getClient: function(id){
//					return $http.get("clients/" + id, config)
//							.then(
//									function(response){
//										return response.data;
//									},
//									function(errResponse){
//										console.error('Error while updating customer getEntity ');
//										return $q.reject(errResponse);
//									}
//							);
//			},
//
//		    createClient: function(client){
//					return $http.post("clients/", client)
//							.then(
//									function(response){
//										return response.data;
//									},
//									function(errResponse){
//										console.error('Error while creating customer');
//										return $q.reject(errResponse);
//									}
//							);
//		    },
//
//		    updateClient: function(client, id){
//					return $http.put("clients/" + id, client)
//							.then(
//									function(response){
//										return response.data;
//									},
//									function(errResponse){
//										console.error('Error while updating customer');
//										return $q.reject(errResponse);
//									}
//							);
//			},
//
//	            deleteClient: function(id){
//					return $http.delete("clients/" + id, config)
//							.then(
//									function(response){
//										return response.data;
//									},
//									function(errResponse){
//										console.error('Error while deleting client');
//										return $q.reject(errResponse);
//									}
//							);
//			}
//
//	};
//    }
//})();


(function() {
    'use strict';
    angular
        .module('savecontactapp')
        .factory('User', User);

    User.$inject = ['$resource'];

    function User ($resource) {
        var resourceUrl =  'users/:_id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                    }
                    return data;
                }
            },
            'update': {
                method: 'PUT',
                transformRequest: function (data) {
                    return angular.toJson(data);
                }
            },
            'save': {
                method: 'POST',
                transformRequest: function (data) {
                    return angular.toJson(data);
                }
            }
        });
    }
})();
