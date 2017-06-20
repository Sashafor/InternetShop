app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(false).hashPrefix('');
    $routeProvider.when('/', {
        controller: 'New',
        templateUrl: 'templates/new.html'
    }).when('/tv', {
        controller: 'Tv',
        templateUrl: 'templates/tv.html'
    }).when('/freeze', {
        controller: 'Freeze',
        templateUrl: 'templates/freeze.html'
    }).when('/heat', {
        controller: 'Heat',
        templateUrl: 'templates/heat.html'
    }).when('/telefon', {
        controller: 'Telefon',
        templateUrl: 'templates/telefon.html'
    }).when('/tvS', {
        controller: 'TvS',
        templateUrl: 'templates/tvS.html'
    }).when('/telp', {
        controller: 'TelP',
        templateUrl: 'templates/telp.html'
    }).when('/telpr', {
        controller: 'TelPr',
        templateUrl: 'templates/telpr.html'
    }).when('/tvP', {
        controller: 'TvP',
        templateUrl: 'templates/tvP.html'
    })
});