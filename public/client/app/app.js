(function() {
    
    // adding a dependancy on ngroute

    var app = angular.module('customersApp', ['ngRoute']);

    app.config(function ($routeProvider) {
 
        // routes in the main app.js
    	$routeProvider
    		.when('/',
    		{
            controller: 'CatchallController',
    			templateUrl: '/client/app/views/welcome.html'
    		})
    		.when('/orders/:customerId',
    		{
    			controller: 'OrdersController',
    			templateUrl: '/client/app/views/orders.html'
    		})
            .when('/depts',
    		{
    			controller: 'DeptsController',
    			templateUrl: '/client/app/views/depts.html'
    		})
    		.otherwise({ redirectTo: '/' });

    });
    
}());