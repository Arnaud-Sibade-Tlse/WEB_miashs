angular.module('memo', []).controller('leMemo',["$scope", "$http", function ($scope, $http){
/*  var mesCartes = this;
  mesCartes.cartes = [
    {text:'Taric le male alpha', img:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Taric_0.jpg'},
    {text:'Taric le plus beau', img:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Taric_2.jpg'},
    {text:'Taric best champ', img:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Taric_4.jpg'}
  ]; */


  $http.get('./taric.json').then(function(taricJson) {
        $scope.mesTarics = taricJson.data.data;
    });

    function getRandomTaric(){
      let TaricRandom = $scope.mesTarics[Object.keys($scope.mesTarics)[getRandomNumber()]];
      
    };

    function getRandomNumber(){
        return Math.floor((Math.random()*($scope.longueurMesTarics-1))+1);
    }

}]);
