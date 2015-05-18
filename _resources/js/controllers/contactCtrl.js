app.controller('contactCtrl', ['$scope', '$http', function($scope,$http){
	$scope.sendmessage = function(){
		console.log('in here');
		if(!$scope.contactform.$invalid){
			$http.post('/mailer/mail.php', {name : $scope.name, email : $scope.email, message : $scope.message, grecaptcharesponse : $scope.gresponse},{headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
			.success(function(data, status, headers, config) {
			    console.log(data);
			})
			.error(function(data, status, headers, config) {
			    console.log(data);
			});
		}
		return false;
	}
	setresponse = function(response){
		$scope.gresponse = response;
	}

}]);