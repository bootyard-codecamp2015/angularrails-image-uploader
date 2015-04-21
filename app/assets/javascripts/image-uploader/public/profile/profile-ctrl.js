( function() {
  'use strict';

  angular.module('public.ctrl.imageProfile', [])
  .controller('ImageController', [ '$scope', '$routeParams', 'Image', '$rootScope',
  	function($scope, $routeParams, Image, $rootScope) {

      $scope.imageProfile = function() {
        Image.$save().$promise.then(function(data) {
            if(data.success == true) {
              alert("Successfully uploaded!");
              $rootScope.$broadcast('uploadImage', true);
            } else {
              alert("Error in uploading image!");
            }
        });
      }


  	}
 
  ]);

})();