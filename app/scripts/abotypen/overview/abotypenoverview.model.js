'use strict';

/**
 */
angular.module('openolitor')
  .factory('AbotypenOverviewModel', function($resource, API_URL) {
    return $resource(API_URL + 'abotypen/:id', {
      id: '@id'
    });
  });