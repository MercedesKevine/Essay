function AppCtrl($scope, $http){
	console.log("bonjour le contolleur")
	var refresh = function(){
	$http.get('/subscribers').success(function(response){
		console.log('le controller na plus de donné')
		$scope.test = response.subscribers;
		})
	};
	refresh();

	$scope.ajouterInfo = function(){
		$scope.info.lastModifiedDate = new Date();
		$http.post('/subscribers',$scope.info).success(
			function(response){
				console.log(response);
				$scope.info="";
				refresh();
			});
	};

	$scope.remove = function(id){
		console.log("la taille avant suppression "+	$scope.test.length );
		$http.delete('/subscribers/' + id).success(
			function(response){
				refresh();
				console.log("la taille apres suppression "+	$scope.test.length );
			});
	};

	$scope.edit = function(id){
		$http.get('/subscribers/' + id).success(
			function(response){
				$scope.info = response;
				refresh();
			});
	};

	$scope.update = function(){
		console.log($scope.info._id);
		$http.put('/subscribers/' + $scope.info._id,
		 $scope.info).success(
			function(response){
				$scope.info="";
				refresh();
			});
	};

};
