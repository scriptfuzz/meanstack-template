
angular.
  module('what2eatApp').
  config(['$locationProvider', '$routeProvider', function config($locationProvider, $routeProvider) {
      $locationProvider.hasPrefix('!');

      $routeProvider.
        when('/voting', {
          template: ''
        }).
        when('/about', {

        })
  }
]);
