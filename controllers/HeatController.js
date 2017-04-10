app.controller("Heat", function($scope, GET) {
    GET.getData().then(function (data) {
        $scope.heat = data.Heat;

    });

    $scope.heat = [];

});