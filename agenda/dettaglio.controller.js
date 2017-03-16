angular.module('app').controller('DettaglioCtrl',function($scope,AgendaSrv,$stateParams,$state){


  $scope.appuntamento= AgendaSrv.dettaglioAppuntamento($state.params.id);

});
