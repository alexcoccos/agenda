angular.module('app').service('AgendaSrv',function(){

  var appuntamenti =
[
  {
    id: 01,
    titolo:"appuntamento lunedi",
    data: new Date(),
    descrizione: "hkdfbjkdavsfhdbs",
    luogo: "jhsdfanjd",
    priorita: "#ffa500",
    image: "http://scontent.cdninstagram.com/t51.2885-15/s480x480/e15/11427300_1031981593479479_60218334_n.jpg?ig_cache_key=MTAxNDAwNjE2MTUxMzIyNzg3NQ%3D%3D.2"
  },{
    id: 02,
    titolo:"appuntamento lunedi",
    data: new Date(),
    descrizione: "hkdfbjkdavsfhdbs",
    luogo: "jhsdfanjd",
    priorita: "#00ff00",
    image: "http://scontent.cdninstagram.com/t51.2885-15/s480x480/e15/11427300_1031981593479479_60218334_n.jpg?ig_cache_key=MTAxNDAwNjE2MTUxMzIyNzg3NQ%3D%3D.2"
  },{
    id: 03,
    titolo:"appuntamento lunedi",
    data: new Date(),
    descrizione: "hkdfbjkdavsfhdbs",
    luogo: "jhsdfanjd",
    priorita: "#ffa500",
    image: "http://scontent.cdninstagram.com/t51.2885-15/s480x480/e15/11427300_1031981593479479_60218334_n.jpg?ig_cache_key=MTAxNDAwNjE2MTUxMzIyNzg3NQ%3D%3D.2"
  },{
    id: 04,
    titolo:"appuntamento lunedi",
    data: new Date(),
    descrizione: "hkdfbjkdavsfhdbs",
    luogo: "jhsdfanjd",
    priorita: "#ffa500",
    image: "http://scontent.cdninstagram.com/t51.2885-15/s480x480/e15/11427300_1031981593479479_60218334_n.jpg?ig_cache_key=MTAxNDAwNjE2MTUxMzIyNzg3NQ%3D%3D.2"
  }
];

  var getAppuntamenti = function (){
    return appuntamenti;
  }
  var dettaglioAppuntamento= function(id){
    return appuntamenti.find(function(el){
      return el.id==id;
    })
  }
  var eliminaAppuntamenti= function(indice){
    appuntamenti.splice(indice,1);
  }


  return{
    getAppuntamenti: getAppuntamenti,
    dettaglioAppuntamento: dettaglioAppuntamento,
    eliminaAppuntamenti: eliminaAppuntamenti
  }


});
