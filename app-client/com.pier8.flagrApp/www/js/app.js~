angular.module('App', ['ngRoute', 'App.services', 'App.controllers'])
    // .config(['$compileProvider', function ($compileProvider) {
    //     $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    // }])
    .config(function ($routeProvider) {
        $routeProvider
        .when('/', {
            controller: 'MainCtrl',
            templateUrl: 'pages/camera.html'
        })
        .when('/view', {
            controller: 'ViewCtrl',
            templateUrl: 'pages/view.html'
        })
        .otherwise({redirectTo: '/'});
    });
