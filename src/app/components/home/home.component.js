const home = {
    templateUrl: './home.html'
};

angular
    .module('components')
    .component('home', home)
    .config(function ($stateProvider) {
        $stateProvider
            .state('app.home', {
                url: '/home'
            });
    });