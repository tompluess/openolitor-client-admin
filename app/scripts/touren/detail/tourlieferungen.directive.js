'use strict';

angular.module('openolitor-admin').directive('ooTourlieferungen', [
  function() {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        itemFilter: '=',
        tourlieferungen: '='
      },
      transclude: true,
      templateUrl: 'scripts/touren/detail/tourlieferungen.html'
    };
  }
]);
