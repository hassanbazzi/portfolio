app.controller('contactCtrl', ['$scope', '$http', function($scope,$http){
	$scope.sendmessage = function(){
		console.log('in here');
		//if(!$scope.contactform.$invalid){
			$http({
    url: 'https://www.google.com/recaptcha/api/siteverify', 
    method: "GET",
    params: {secret: '6LecfP8SAAAAAI_jjo8CNAYa8AQSC1YRwnFibq85', response: $scope.gresponse, callback : '?'}
 })
			.success(function(data){
				$http.post('/mailer/mail.php', {name : $scope.name, email : $scope.email, message : $scope.message}).
				  success(function(data, status, headers, config) {
				    console.log(data);
				  }).
				  error(function(data, status, headers, config) {
				    console.log(data);
				  });
			})
			.error(function(data){
				console.log(data);
			});
		//}
		return false;
	}
	setresponse = function(response){
		$scope.gresponse = response;
	}

}]);
setresponse = function(response){

}