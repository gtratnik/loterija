angular.module('app').controller('LoterijaController', function($scope, $q) {
  $scope.arr = [];
  $scope.calculating = false;

  function getRandomNumber(min, max) {
    return parseInt(Math.floor(Math.random() * (max - min + 1)) + min);
  }

  function contains(item) {
    for (var i = 0; i < $scope.arr.length; i++) {
      if ($scope.arr[i].number == item) {
        return true;
      }
    }
    return false;
  }

  function getPromise() {
    var defer = $q.defer();
    var calculateTime = getRandomNumber(2000, 5000);
    setTimeout(function() {
      var number = undefined;
      do {
        number = getRandomNumber(1, 100);
      } while (contains(number));
      var item = {
        number: number,
        calculateTime: calculateTime
      };
      $scope.arr.push(item);

      defer.resolve(number);
    }, calculateTime);
    return defer.promise;
  };

  $scope.zazeni = function() {
    $scope.calculating = true;
    $scope.arr = [];
    getPromise().then(function(success) {
      return success;
    }).then(function(success) {
      return getPromise();
    }).then(function(success) {
      return getPromise();
    });

  }

});