var mymodule = angular.module('mymodule', ['ui.router']);

mymodule.directive("usersinfo", function() {
    return {
        restrict: 'E',
        templateUrl: 'app/components/directive.html',
        controller: 'projectscontroller'
    }
});

mymodule.directive("topyellow", function() {
    return {
        restrict: 'E',
        templateUrl: 'app/components/directiveYellow.html',
        controller: 'projectscontroller'
    }
});

mymodule.directive("topwhite", function() {
    return {
        restrict: 'E',
        templateUrl: 'app/components/directiveWhite.html',
        controller: 'projectscontroller'
    }
});

mymodule.directive("topblue", function() {
    return {
        restrict: 'E',
        templateUrl: 'app/components/directiveBlue.html',
        controller: 'projectscontroller'
    }
});

mymodule.directive("topdark", function() {
    return {
        restrict: 'E',
        templateUrl: 'app/components/directiveDark.html'
    }
});

mymodule.directive("topblack", function() {
    return {
        restrict: 'E',
        templateUrl: 'app/components/directiveBlack.html'
    }
});


/* Blog */

mymodule.directive("blogcomp", function() {
    return {
        restrict: 'E',
        templateUrl: 'app/components/blogcomp.html',
        controller: 'projectscontroller'
    }
});


mymodule.directive("centerlogo", function() {
    return {
        restrict: 'E',
        templateUrl: 'app/components/directives/centerlogo.html',
        controller: 'projectscontroller'
    }
});

mymodule.directive("bloglist", function() {
    return {
        restrict: 'E',
        templateUrl: 'app/components/directives/bloglist.html',
        controller: 'projectscontroller'
    }
});

mymodule.directive("search", function() {
    return {
        restrict: 'E',
        templateUrl: 'app/components/directiveSearch.html',
        controller: 'projectscontroller'
    }
});

mymodule.controller('projectscontroller', ['$scope', '$http',
    function ($scope, $http) {

        $scope.naomi = { name: 'Nigel Johnson', address: '1600 Amphitheatre' };
        $scope.vojta = { name: 'Vojta', address: '3456 Somewhere Else' };

        $scope.blogtitle = "this is my first blog post";
        $scope.blogimageSrc = "/assets/imac.svg";
        $scope.blogimageSrciPhone = "/assets/iphone.svg";
        $scope.blogimageSrciPad = "/assets/ipad.svg";
        $scope.blogDescription = "This is blog description.";
        $scope.blogComments = [
                {
                    comment: 'comment 1'
                },
                {
                    comment: 'comment 2'
                },
                {
                    comment: 'comment 3'
                }

                ];

        $scope.peoples =
        [
            {
                name: 'Nigel Johnson',
                address: '1600 Amphitheatre',
                link: 'detailsPage', price: '38',
                category: 'UI Kits',
                img: 'assets/blue.jpg',
                comments: [
                {
                    comment: 'comment 1'
                },
                {
                    comment: 'comment 2'
                },
                {
                    comment: 'comment 3'
                }

                ]
            }
        ]


        var x = $scope.peoples[0];
        console.log(x);

    }
]);

mymodule.controller('moviecontroller', ['$scope', '$http',
    function ($scope, $http) {

      $scope.naomi = { name: 'Naomi', address: '1600 Amphitheatre' };
      $scope.vojta = { name: 'Vojta', address: '3456 Somewhere Else' };

    }
]);

mymodule.controller('blogcontroller', ['$scope', '$http',
    function ($scope, $http) {

        $scope.naomi = { name: 'Nigel Johnson', address: '1600 Amphitheatre' };
        $scope.vojta = { name: 'Vojta', address: '3456 Somewhere Else' };

        $scope.blog =
        [
            { name: 'Nigel Johnson', address: '1600 Amphitheatre', link: 'detailsPage', price: '38', category: 'UI Kits', img: 'assets/blue.jpg' }
        ]

    }
]);