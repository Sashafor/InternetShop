app.service('GET', function ($q) {
    return {
        getData: function () {
            var d = $q.defer();
            firebase.database().ref('Tehnika').once('value').then(function (snapshot) {
                var tv = snapshot.val();
                d.resolve(tv)
            });
            return d.promise
        }
    };
});