( function() {
  'use strict';

  angular.module('public.ctrl.imageFileUploader', ['angularFileUpload'])
  .controller('fileImageUploadCtrl', ['$scope', 'FileUploader', 'Image','$rootScope',
    function($scope, FileUploader, Image, $rootScope) {
      $scope.image = null;0
      $scope.uploading = false;

      Image.get().$promise.then(function(data) {
        if (data.success == true) {
          $scope.image = data.image_url;
        }
      });

      var uploader = $scope.uploader = new FileUploader({ url: '/api/public/images/upload_file_image'});
      uploader.onSuccessItem = function(fileItem, response, status, headers) {
        $scope.uploading = false;
        alert("Successfully uploaded image!");
        $scope.image = response.image_url;
      };

      uploader.onProgressItem =  function(fileItem, progress) {
        $scope.uploading = true;
      };

      $scope.imageProfile = function() {
        uploader.uploadAll();
        Image.get().$promise.then(function(data) {
          if (data.success == true) {
            $scope.image = data.image_url;
            alert("Successfully uploaded!");
             $rootScope.$broadcast('uploadImage', true);

        
          }
        });
      }

    }
  ]);
})();