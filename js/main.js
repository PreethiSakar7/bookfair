/*
File : Main JS to contain router
created By : Preehi
Date : 26 April, 2016
*/

var myapp = angular.module("bookFair",['ngRoute']);

myapp.config(['$routeProvider', '$httpProvider', function($routeProvider,$httpProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templates/home.html'
        })
         .when('/books', {
                templateUrl: 'templates/books.html'
            })
         .when('/register', {
                templateUrl: 'templates/register.html'
            })
         .when('/contact', {
                templateUrl: 'templates/contact.html'
            })
        .otherwise({ redirectTo: '/' });
     $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
}]);

myapp.controller("navBarCtrl",['$scope',function($scope){

    $scope.makeActive = function(elemID){
        var kids1 = document.getElementById('main-nav').children;
		for(var i = 0; i < kids1.length; i++){
			kids1[i].className = "non-active";
		}
		$("#"+elemID).addClass("active");
    }
}]);

myapp.controller("register",['$scope',function($scope){
    
    $scope.registerForm = function(){
        console.log("OK");
        if($("#form1").valid()){
            alert("You have successfully register.Coupon will be send to your mail.")
        }
    }
}]);