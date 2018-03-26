const app = angular.module("suitcasemusik", ['ngRoute'])

app.config(function($routeProvider) {
  $routeProvider
  .when('/0=1=infinity', {
    templateUrl: '../views/0=1=infinity.html'
  })
  .when('/suitcasemusik', {
    templateUrl: '../views/suitcase.html'
  })
  .when('/testimonials', {
    templateUrl: '../views/testimonials.html'
  })
  .when('/contactInfo', {
    templateUrl: '../views/contact.html'
  })
  .when('/q&a', {
    templateUrl: '../views/q&a.html'
  })
  .otherwise({
    templateUrl: '../views/home.html'
  })
})


// app.controller('CommentController', ['$http',s function($http) {
//   this.getComments = function() {
//     const makeAjaxCall = $http({
//       method: 'GET',
//       url: 'https://www.localhost:9292/comments'
//     }).then(function(res) {
//       console.log(res);
//     }, function(err) {
//       console.error(err)
//     })
//   }

//   this.postComments = function() {
//     const makeAjaxCall = $http({
//       method: 'POST',
//       url: 'https://www.localhost:9292/comments'
//     }).then(function(res) {
//       console.log(res)
//     }, function(err) {
//       console.error(err)
//     })
//   };
  
// }]);