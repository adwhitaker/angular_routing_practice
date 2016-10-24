angular.module('spongebobApp')
       .config(linkCharacters);

function linkCharacters($routeProvider, $locationProvider) {
  console.log('inside linkCharacters');
  $routeProvider.when('/spongebob', {
    templateUrl: 'views/spongebob.html'
  }).when('/patrick', {
    templateUrl: 'views/patrick.html'
  }).when('/plankton', {
    templateUrl: 'views/plankton.html'
  });

  $locationProvider.html5Mode(true);
}
