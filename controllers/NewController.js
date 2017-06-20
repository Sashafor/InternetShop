app.controller("New", function($scope, GET) {
    GET.getData().then(function (data) {
        $scope.new = data.New;

    });

    $scope.new = [];
    

});