app.controller('employeeCtrl', ['$scope','employeeData', function($scope, employeeData){
	
	$scope.employees = [];

	var promise2 = employeeData.getEmployeeData();
	promise2.then(function(data) {
	    $scope.employees = data;
	});

	$scope.deleteEmp = function(index){
		if($scope.employees.length > 1){
			$scope.employees.splice(index, 1);
		}
		else{
			alert("Can not delete all...!")
		}
	}

}])