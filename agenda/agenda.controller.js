angular.module('app').controller('AgendaCtrl',function($scope,appuntamenti,AgendaSrv){

    $scope.appuntamenti= appuntamenti;
    console.log($scope.appuntamenti);

    $scope.elimina=function(indice){
      AgendaSrv.eliminaAppuntamenti(indice);
    }
    $scope.colore= "Tutte";
    $scope.$watch('colore',function(colore){

    })



});
