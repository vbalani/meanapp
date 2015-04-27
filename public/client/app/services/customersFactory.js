// factory definition
( function() {
    var customerFactory = function($http) {
         
        // define all factory methods (functions)
                
        var factory ={}; // factory object
        factory.getCustomers = function() {
           return $http.get('/customers');
        };
        
       // we can call this many times from many places
        factory.getCustomer = function(customerId) {            
           return $http.get('/customers'+ customerId);           
            };
        
        return factory; 
    };
    
    customerFactory.$inject = ['$http'];
    // register the customerFactory function with angular, factory function call's first param is the name by which it will be included in other parts of code, this also happens tobe the name of th js file
        angular.module('customersApp').factory('customersFactory',customerFactory);
    
} () );

// its a self invoked function