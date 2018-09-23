var app = angular.module('myApp',  ['ngTouch']);
app.controller('myCtrl', function($scope, $http, $timeout) {
  $http.get("wordsApp/data/words.json").then(function (response) {
      $scope.words = response.data;
	  $scope.showActions = false;
	  $scope.timedOut = false;
  });

  $timeout( function(){ $scope.timed(); }, 60000*5);  
  
 // $http.post(url, parameter).
  //  success(function(data, status, headers, config) {
        // this callback will be called asynchronously
        // when the response is available
  //      console.log(data);
   //   }).
   //   error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
   //   });
   
   $scope.right= function(word){
		word.count=1;
		$scope.showActions = !$scope.showActions;
   };
   
   $scope.timed = function(){
     $scope.timedOut = !$scope.timedOut;
	// var audio = new Audio('http://localhost:3000/wordsApp/sounds/sound1.mp4');
     // audio.play();
   };
});
