app.controller("TelPr", function($scope, GET) {
	var vid = 'Telefon';
	var price = 3000
    GET.getPrice({vid, price}).then(function (data) {
        $scope.telp = data;

    });

    $scope.telp = [];

});