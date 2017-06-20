app.controller("TvP", function($scope, GET) {
    var vid = 'TV';
    var model = 'Panasonic'
    GET.getDataTvPanas({vid, model}).then(function (data) {
        $scope.tvs = data;

    });

    $scope.tvs = [];

});