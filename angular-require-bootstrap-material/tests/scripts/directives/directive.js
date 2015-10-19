'use strict';
define(['app'], function(app)
{
    app.directive('mainHeader', function() {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                "menuNavigation" : "="
            },
            controller: function($scope, $element) {
                $scope.selectMenu = function(obj, sel){
                    angular.forEach(obj, function(v, k){
                        if(obj[k].key === sel.key){
                            obj[k].selected = true;
                        }else{
                            obj[k].selected = false;
                        }
                    });
                }
            },
            templateUrl:'views/header.html',
            replace: true
        };
    });

    app.directive('mainFooter', function() {
        return {
            restrict: 'E',
            transclude: true,
            templateUrl:'views/footer.html'
        };
    });


});