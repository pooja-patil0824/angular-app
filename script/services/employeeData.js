app.service('employeeData', ['$http', '$q', function($http, $q){
	
	var deferred = $q.defer();
    $http.get('../../data/empData.json').then(function(response) {
        deferred.resolve(response.data);
    });

    this.getEmployeeData = function(){
        return deferred.promise;
    };

}])

app.factory('empDetailedHistory', ['$http', '$q', function($http, $q){
    var factoryObj = {};

    var deferred = $q.defer();
    $http.get('../../data/empHistory.json').then(function(response) {
        deferred.resolve(response.data);
    });

    factoryObj.getEmpHistory = function(){
        return deferred.promise;
    };

    return factoryObj;

}])