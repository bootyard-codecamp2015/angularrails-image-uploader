( function() {
  'use strict';

  angular.module('image-uploader', [
    // Libraries
    'templates',
    'ngRoute',

    // Resource
    'public.resource.image',

    // Controllers
    'public.ctrl.imageProfile',
    'public.ctrl.imageFileUploader',
  ])
  .config(['$routeProvider', 
    function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'image-uploader/public/profile/profile.html'
        });    

    }
  ]);

})();