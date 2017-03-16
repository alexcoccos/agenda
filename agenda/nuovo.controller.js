angular.module('app').controller('NuovoCtrl',function($scope,AgendaSrv,$state){

  $scope.crea=function(){
    console.log($scope.appuntamento);
    // $state.go('/');
  }

  $scope.back= function(){
    $state.go('/');
  }

  $scope.appuntamento = {};
  $scope.appuntamento.priorita= "#00ff00";
  $scope.appuntamento.data= new Date();

  $scope.crea= function(){
    $scope.appuntamento= AgendaSrv.creaAppuntamento($scope.appuntamento);
    $state.go('/');
  }






});
