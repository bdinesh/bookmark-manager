const home = {
    templateUrl: './home.html'
};

angular
    .module('common')
    .component('home', home)
    .config(function ($stateProvider) {
        $stateProvider
            .state('app.home', {
                url: '/home',
                component: 'home'
            });
    });