(function() {
  'use strict';

  angular.module('public.resource.image', ['ngResource'])
  .factory("Image", [
    '$resource', function($resource) {
      return $resource("/api/public/images/:id.json", {
        id: "@id"
      },{
        update: { method: 'PUT' }
      });
  }]);
  
})();