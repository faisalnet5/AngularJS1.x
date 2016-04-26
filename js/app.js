//To support Example-2 and on...
var app = angular.module('myApp', []);			//This is an example of Angular Module

/*
POINTS TO MEMORISE:
====================================
(1)	Modules are like a container which defines an Application by containing various parts of that Application such as Controllers, Directives
*/

app.controller('myCtrl', function($scope) {		//This is an example of Angular Controller
    $scope.name= "Adnan";						//Have clear idea of Angular $scope
    $scope.lastName = "Sami";
    $scope.country = "Bangladesh";
    $scope.capital = "DHAKA";
    $scope.myArray=[10,25,39,20,80];
    $scope.employees = [
        {name:'Jani',country:'Norway'},
        {name:'Carl',country:'Sweden'},
        {name:'Margareth',country:'England'},
        {name:'Hege',country:'Norway'},
        {name:'Joe',country:'Denmark'},
        {name:'Gustav',country:'Sweden'},
        {name:'Birgit',country:'Denmark'},
        {name:'Mary',country:'England'},
        {name:'Kai',country:'Norway'}
        ];
    $scope.salary = 125000;
});

//To support Example-3: //These are examples on Angular Directive
app.directive("myDirectiveOne", function() {	
    return {
    	restrict : "E",							//Element
        template : "<h3>Example on Element: My Custom directive!</h3>"
    };
});

app.directive("myDirectiveTwo", function() {	
    return {
        restrict : "A",							//Attribute
        template : "<h3>Example on Attribute: My Custom directive!</h3>"
    };
});

app.directive("myDirectiveThree", function() {
    return {
        restrict : "C",							//Class
        template : "<h3>Example on Class: My Custom directive!</h3>"
    };
});

app.directive("myDirectiveFour", function() {
    return {
        restrict : "M",							//Comment
        replace : true,
        template : "<h3>Example on Comment: My Custom directive!</h3>"
    };
});

//To support Example-4:
app.controller('myNewCtrl', function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $scope.fullName = function() {
        return $scope.firstName + " " + $scope.lastName;
    };
});

//To support Example-5 (Custom Filter):
app.filter('myFormat', function() {
    return function(x) {
        var i, c, txt = "";
        x = x.split("")
        for (i = 0; i < x.length; i++) {
            c = x[i];
            if (i % 2 == 0) {
                c = c.toUpperCase();
            }
            txt += c;
        }
        return txt;
    };
});

//To support Example-6 (In-Build Service)
app.controller('serviceOneCtrl', function($scope, $location) {		//$location
    $scope.myUrl = $location.absUrl();
});

app.controller('serviceTwoCtrl', function($scope, $http ) {			//$http
    $http.get("extrapage.htm")
    .then(function (response) {
        $scope.message = response.data;

        //Some more INFO gathering by using properties
        $scope.statuscode = response.status;
        $scope.statustext = response.statusText;
        $scope.config  = response.config ;

    }, function(response) {	//This way by adding one more functions to the .then method we can handle errors
      	$scope.message = "Something went wrong :(";

      	//Some more INFO gathering by using properties
        $scope.statuscode = response.status;
        $scope.statustext = response.statusText;
        $scope.config  = response.config ;

  	});
});

app.controller('timeoutCtrl', function($scope, $timeout) {			//$timeout
  $scope.timemessage = "Hello Adnan!";
  $timeout(function () {
      $scope.timemessage = "How are you today?";
  }, 2000);
});

app.controller('intervalCtrl', function($scope, $interval) {		//$interval
  $scope.theTime = new Date().toLocaleTimeString();
  $interval(function () {
      $scope.theTime = new Date().toLocaleTimeString();
  }, 1000);
});

//To support Example-6 (Custom Service)
app.service('hexafy', function() {
    this.myFunc = function (x) {
        return x.toString(16);
    }
});

app.controller('customServiceCtrl', function($scope, hexafy) {
  $scope.hex = hexafy.myFunc(255);
});

app.filter('myFormat',['hexafy', function(hexafy) {
    return function(x) {
        return hexafy.myFunc(x);
    };
}]);
app.controller('customFilterServiceCtrl', function($scope) {
    $scope.counts = [255, 251, 200];
});

