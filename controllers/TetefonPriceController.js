app.controller("TelP", function($scope, GET) {
	var vid = 'Telefon';
	var price = 5000
    GET.getPrice({vid, price}).then(function (data) {
        $scope.telp = data;

    });

    $scope.telp = [];

});