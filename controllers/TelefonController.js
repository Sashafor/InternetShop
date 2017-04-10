app.controller("Telefon", function($scope, GET) {
    GET.getData().then(function (data) {
        $scope.telefon = data.Telefon;

    });

    $scope.telefon = [];

});