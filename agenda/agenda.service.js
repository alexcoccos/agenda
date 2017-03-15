angular.module('app').service('AgendaSrv',function(){

  var appuntamenti =
[
  {
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
