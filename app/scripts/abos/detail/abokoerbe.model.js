'use strict';

/**
 */
angular.module('openolitor-admin')
  .factory('AboKoerbeModel', function($resource, API_URL) {
    return $resource(API_URL + 'kunden/:kundeId/abos/:id/koerbe', {
      id: '@id',
      kundeId: '@kundeId'
    });
  });
