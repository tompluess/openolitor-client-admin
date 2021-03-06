'use strict';

/**
 */
angular.module('openolitor-admin')
  .factory('AbwesenheitenListModel', function($resource, API_URL) {
    return $resource(API_URL +
      'kunden/:kundeId/abos/:aboId/abwesenheiten/:id', {
        id: '@id',
        aboId: '@aboId',
        kundeId: '@kundeId'
      });
  });
