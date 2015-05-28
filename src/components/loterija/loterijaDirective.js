angular.module('app').directive('loterija', function(){
	return {
		restrict: 'E',
		scope:{},
		controller: 'LoterijaController',
		templateUrl: 'templates/loterija-template.html'
	};
});