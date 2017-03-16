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
    priorita: "#ff0000",
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
  var aggiornaAppuntamento = function(app){
    var nuovo = angular.copy(app);//uguale  quello che sta commentto sotto
      // id: app.id,
      // titolo: app.titolo,
      // data: app.data,
      // descrizione: app.descrizione,
      // luogo: app.luogo,
      // priorita: app.priorita,
      // image: app.image
 //se chiamiamo invece la lista dal db esterno dovremmo richiamare la function getAppuntamenti
    var indice = appuntamenti.findIndex(function(el){
      return el.id == app.id;
    })
    appuntamenti.splice(indice,1,nuovo);
  }
  var creaAppuntamento = function(app){
    var nuovo = angular.copy(app);
    appuntamenti.push(nuovo);
  }



  return{
    getAppuntamenti: getAppuntamenti,
    dettaglioAppuntamento: dettaglioAppuntamento,
    eliminaAppuntamenti: eliminaAppuntamenti,
    aggiornaAppuntamento: aggiornaAppuntamento,
    creaAppuntamento: creaAppuntamento
  }



});
