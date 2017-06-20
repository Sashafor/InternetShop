app.service('GET', function ($q) {
    return {
        getData: function () {
            var d = $q.defer();
            firebase.database().ref('Tehnika').once('value').then(function (snapshot) {
                var tv = snapshot.val();
                d.resolve(tv)
            });
            return d.promise;
        },

        getDataTvPanas: function (params) {
            var d = $q.defer();
            var vid = params.vid;
            firebase.database().ref('Tehnika/' + vid).once('value').then(function (snapshot) {
                var alltv = snapshot.val();
                var tvp = [];
                for(var index in alltv) { 
                    tvp.push(alltv[index]) 
                }
                var tvpan = tvp.filter(function(item) {
                    return item.Name == params.model
                })
                d.resolve(tvpan)
            });
            return d.promise;
        },

        getPrice: function (params) {
            var d = $q.defer();
            var vid = params.vid;
            firebase.database().ref('Tehnika/' + vid).once('value').then(function (snapshot) {
                var alltv = snapshot.val();
                var tvp = [];
                for(var index in alltv) { 
                    tvp.push(alltv[index]) 
                }
                var tvpan = tvp.filter(function(item) {
                    return item.Price < params.price
                })
                d.resolve(tvpan)
            });
            return d.promise;
        }
        

    }
});