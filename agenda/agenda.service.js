angular.module('app').service('AgendaSrv',function(){

  var appuntamenti =
[
  {
    titolo:"appuntamento lunedi",
    data: new Date(),
    descrizione: "hkdfbjkdavsfhdbs",
    luogo: "jhsdfanjd",
    priorita: "#ffa500",
    image: "http://scontent.cdninstagram.com/t51.2885-15/s480x480/e15/11427300_1031981593479479_60218334_n.jpg?ig_cache_key=MTAxNDAwNjE2MTUxMzIyNzg3NQ%3D%3D.2"
  },{
    titolo:"appuntamento lunedi",
    data: new Date(),
    descrizione: "hkdfbjkdavsfhdbs",
    luogo: "jhsdfanjd",
    priorita: "#ffa500"
  },{
    titolo:"appuntamento lunedi",
    data: new Date(),
    descrizione: "hkdfbjkdavsfhdbs",
    luogo: "jhsdfanjd",
    priorita: "#ffa500"
  },{
    titolo:"appuntamento lunedi",
    data: new Date(),
    descrizione: "hkdfbjkdavsfhdbs",
    luogo: "jhsdfanjd",
    priorita: "#ffa500"
  }
];

  var getAppuntamenti = function (){
    return appuntamenti;
  }

  return{
    getAppuntamenti: getAppuntamenti
  }


});
