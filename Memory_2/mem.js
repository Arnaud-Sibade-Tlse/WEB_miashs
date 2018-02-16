angular.module('memo', []).controller('leMemo',["$scope", "$http", function ($scope, $http){
/*  var mesCartes = this;
  mesCartes.cartes = [
    {text:'Taric le male alpha', img:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Taric_0.jpg'},
    {text:'Taric le plus beau', img:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Taric_2.jpg'},
    {text:'Taric best champ', img:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Taric_4.jpg'}
  ]; */


  $http.get('./taric.json').then(function(taricJson) {
        let temp = [];
        for (var elem in taricJson.data.data) {
          console.log(elem);
          console.log(taricJson.data.data[elem]);
          temp.push(taricJson.data.data[elem]);
          temp.push(taricJson.data.data[elem]);
        }
        temp = shuffle(temp);
        temp = shuffle(temp);



        console.log(temp);
        $scope.mesTarics = toObject(temp);

    });

    function toObject(arr) {
      var rv = {};
      for (var i = 0; i < arr.length; ++i)
        rv[i] = arr[i];
      return rv;
    }

    function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
}]);
