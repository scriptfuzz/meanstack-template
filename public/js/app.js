// Define the module
var what2eatApp = angular.module('what2eatApp', []);

// Define the `foodListController` controller on the `phonecatApp` module
what2eatApp.controller('foodListController', function foodListController($scope) {
  
  $scope.restaurants = [
    {
      name: 'La cantina',
      description: 'Mexican caqui food'
    }, {
      name: 'La lechonera',
      description: 'Grasita para el alma'
    }, {
      name: 'BBQ Grill',
      description: 'Chicken, fat and spicy'
    }
  ];

});