(function() {
    function config($stateProvider, $locationProvider){
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
        });
        
        $stateProvider
            .state('home', {
                url: "/",
                controller: "MainCtrl as home",
                templateUrl: '/templates/home.html'
        });
    }
    
angular
    .module("blocChat", ["firebase", "ui.bootstrap", "ui.router"])
    .config(config);
})();
