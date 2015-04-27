(function () {
    // i can have any nbr of parameters below, depending on the factories and 
    var CatchallController = function($scope, appSettings) {
       
        $scope.appSettings = appSettings;
        };
    };
    
    // minification avoidance boiler plate code, just add all the variables used in the controller function
    // definition
    CatchallController.$inject = ['$scope','appSettings'];
    
    console.log('catchall controller');
    
    angular.module('customersApp')
      .controller('CatchallController', CatchallController);
    
}());