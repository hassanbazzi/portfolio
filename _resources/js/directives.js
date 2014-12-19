app.directive('portfolioHeader', function() {
  return {
  	restrict: 'E',
    templateUrl: 'partials/portfolioHeader.html',
    replace:true
  };
});
app.directive('portfolioFooter', function() {
  return {
  	restrict: 'E',
    templateUrl: 'partials/portfolioFooter.html',
    replace:true
  };
});