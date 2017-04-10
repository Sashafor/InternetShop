app.controller("Tv", function($scope, GET) {
    GET.getData().then(function (data) {
        $scope.tv = data.TV;

    });

    $scope.tv = [];

});