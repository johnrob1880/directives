angular.module('directiveExamplesApp', ['johnrob1880.directives.hovercon'])
.controller('mainCtrl', ['$scope', function ($scope) {

        $scope.iconClick = function (elm) {
            alert('working');
        };
    }]);