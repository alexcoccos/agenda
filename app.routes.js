angular.module('app').config(function($stateProvider, $urlRouterProvider) {

<!-- -->
$urlRouterProvider.otherwise('/');
$urlRouterProvider.when('', '/');
<!-- -->
<!-- -->
$stateProvider
    .state('/', {
        url: '/',
        controller: 'AgendaCtrl',
        templateUrl: 'agenda/agenda.template.html',
        resolve: {
            appuntamenti: function(AgendaSrv) {
                return AgendaSrv.getAppuntamenti();
            }
        }
    })
    .state('dettaglio', {
        url: '/dettagio/:id',
        controller: 'DettaglioCtrl',
        templateUrl: 'agenda/dettaglio.template.html',

    });


});
