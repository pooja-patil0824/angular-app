
var app = angular.module('tutorialApp', [
  'ngRoute'  
]);


app.config(function($routeProvider, $locationProvider){
	$routeProvider
	.when('/employees',{
        template: '<emp-list></emp-list>'
	})
	.when('/employees/:empID',{
		template:'<emp-details></emp-details>'
	})
	.otherwise('/employees');
})




