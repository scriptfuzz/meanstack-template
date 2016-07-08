// Define the module
var app = angular.module('what2eatApp', ['ui.bootstrap']); // include dependency on ui.boostrap

// Define the `foodListController` controller on the `phonecatApp` module
app.controller('foodListController', function foodListController($scope, $http) {

    $scope.progress = 10;

    if (navigator.geolocation) navigator.geolocation.getCurrentPosition(onPosition);
    // Once the browser retrieves the users location it will make the
    // AJAX call to the backend and query the YELP api.
    function onPosition(position) {
        $scope.progress = 50;
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        // Store geolocation
        $scope.coordinates = {
            lat: lat,
            lng: lng
        };
        // build the url to call
        var url = '/api/v1/restaurant/all?longitude=' + lng + '&latitude=' + lat;
        // Make http call to Node.js with the coordinates of the user
        $http.get(url)
            .then(function successCallBack(response) {
                $scope.progress = 80;
                var data = response.data;
                console.log(data);
                // From the resulting data extract the businesses array 
                // if not defined set businesses variable to an empty
                // array.
                var businesses = data.businesses || [];
                // Append the result to the scope variable to make it accessible in other places.
                $scope.restaurants = businesses;
                $scope.numberOfResturants = businesses.length;
                $scope.progress = 100;
                $scope.done = true;

            }, function errorCallback(response) {
                console.log('Error calling api: ' + JSON.stringify(response));
            });


    };

    $scope.range = function(num) {
        num = Math.floor(num);
        return new Array(num);
    };

    $scope.isDecimal = function(num) {
        return num % 1 != 0;
    };

});