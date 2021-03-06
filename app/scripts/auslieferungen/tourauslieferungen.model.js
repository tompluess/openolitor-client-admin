'use strict';

/**
 */
angular.module('openolitor-admin')
  .factory('TourAuslieferungenModel', function($resource, API_URL, exportODSModuleFunction) {
    return $resource(API_URL + 'tourauslieferungen/:id/:extendedPath/:aktion', {
      id: '@id'
    }, {
      ausliefern: {
        method: 'POST',
        params: {
          extendedPath: 'aktionen',
          aktion: 'ausliefern'
        }
      },
      'exportODS': exportODSModuleFunction
    });
  });
