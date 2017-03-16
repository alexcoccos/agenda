angular.module('app').filter('filtroPriorita',function(){


  return function(appuntamenti,colore){
    if(colore=='Tutte'){
      return appuntamenti;
    }
    return appuntamenti.filter(function(el){
        return el.priorita == colore;
    });
  }



});
