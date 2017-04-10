app.controller("Freeze", function($scope, GET) {
    GET.getData().then(function (data) {
        $scope.freeze = data.Freeze;

    });

    $scope.freeze = [];

});