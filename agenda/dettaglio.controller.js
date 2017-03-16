angular.module('app').controller('DettaglioCtrl',function($scope,AgendaSrv,$stateParams,$state){


  $scope.appuntamento= AgendaSrv.dettaglioAppuntamento($state.params.id);

  $scope.modifica= function(){
    $scope.appuntamento= AgendaSrv.aggiornaAppuntamento($scope.appuntamento);
    $state.go('/');
  }
  $scope.back= function(){
    $state.go('/');//questo significa vai alla pagnia iniziale tramite la rotta
  }

});
