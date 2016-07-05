// Define the `phonecatApp` module
var what2eatApp = angular.module('what2eatApp', []);

// Define the `foodListController` controller on the `phonecatApp` module
what2eatApp.controller('foodListController', function foodListController($scope) {
  $scope.phones = [
    {
      name: 'Nexus S',
      snippet: 'Fast just got faster with Nexus S.'
    }, {
      name: 'Motorola XOOM™ with Wi-Fi',
      snippet: 'The Next, Next Generation tablet.'
    }, {
      name: 'MOTOROLA XOOM™',
      snippet: 'The Next, Next Generation tablet.'
    }
  ];
});