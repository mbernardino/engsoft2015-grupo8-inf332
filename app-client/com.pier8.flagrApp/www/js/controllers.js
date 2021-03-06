angular.module('App.controllers', [])
    .directive('camera', function() {
	   return {
	      restrict: 'A',
	      require: 'ngModel',
	      link: function(scope, elm, attrs, ctrl) {


		 elm.on('click', function() {
		    navigator.camera.getPicture(function (imageURI) {
		       scope.$apply(function() {
			  ctrl.$setViewValue(imageURI);
		       });
		    }, function (err) {
		       ctrl.$setValidity('error', false);
		    }, { 
			quality : 50,
			destinationType : Camera.DestinationType.DATA_URL,
			sourceType : Camera.PictureSourceType.PHOTOLIBRARY,
			allowEdit : true,
			encodingType: Camera.EncodingType.JPEG,
			targetWidth: 1000,
			targetHeight: 1000,
			popoverOptions: CameraPopoverOptions,
			saveToPhotoAlbum: false 
		    })
		 });  
	      }
	   };	
    })
    .controller('MainCtrl', ['$scope', function ($scope) {
	$scope.status = "teste 01";
	$scope.myPictures = [];
	$scope.$watch('myPicture', function(value) {
	   if(value) {
	      myPictures.push(value);
	   }
	}, true);
    }])
    .controller('ViewCtrl', ['$scope', function ($scope) {
        $scope.status = "teste 02";
    }]);
