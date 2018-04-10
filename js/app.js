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
    templateUrl: '../views/q&a.html',
    controller: "CommentController as com"
  })
  .otherwise({
    templateUrl: '../views/home.html'
  })
})


app.controller('CommentController', ['$http', function($http) {

  this.getQuestions = function() {
    const makeAjaxCall = $http({
      method: 'GET',
      url: 'http://localhost:9292/question'
    }).then(function(res) {
      console.log(res);
    }, function(err) {
      console.error(err)
    })
  }

  this.getQuestions() //runs the function immediatley we chall see what it brings

  this.postComments = function() {
    const makeAjaxCall = $http({
      method: 'POST',
      url: 'http://localhost:9292/comments'
    }).then(function(res) {
      console.log(res)
    }, function(err) {
      console.error(err)
    })
  };
  
}]);