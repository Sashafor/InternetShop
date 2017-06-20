app.controller("TvS", function($scope, GET) {
	var vid = 'TV';
	var model = 'Samsung'
    GET.getDataTvPanas({vid, model}).then(function (data) {
        $scope.tvs = data;

    });

    $scope.tvs = [];

});


