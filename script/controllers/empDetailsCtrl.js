app.controller('empDetailsCtrl', function($scope, $routeParams, empDetailedHistory){
	$scope.empHistory = [];
	$scope.empID = $routeParams.empID;
	var id = $scope.empID;
	var obj;
	var promise = empDetailedHistory.getEmpHistory();
	promise.then(function(data){
		$scope.empHistory = data;
		obj = ($scope.empHistory).find(function(obj){
			return Object.keys(obj)[0] == id;
		});
		$scope.fullName = obj[$scope.empID][0].name;
		$scope.projDetails = obj[$scope.empID][0].projectDetails;
	});


	$scope.addNewProject = function(empID, newProject){
		$scope.projDetails.push({
			"Account":newProject.Acc,
			"Billable":newProject.Bill,
			"Duration":newProject.Dur,
			"Location":newProject.Loc,
			"projectId" : newProject.PId 
		});
		console.log('$scope.projDetails', $scope.projDetails)		
	}
	
})