'use strict';
define(['app'], function(app){
    app.controller('mainCtrl',function($scope, $location) {
           $scope.menuConfig = [{
                "name": "Home",
                "key":"home",
                "url":"/#/home",
                "selected": true
           },{
                "name": "About",
                "key":"about",
                "url":"/#/about",
                "selected": false
           }]

            $scope.selectMenuOnLoad = function(){
                var path = $location.path().split('/')[1];
                angular.forEach($scope.menuConfig, function(v, k){
                    if(v.key === path){
                        $scope.menuConfig[k].selected = true;
                    }else{
                        $scope.menuConfig[k].selected = false;
                    }
                });
            }

            $scope.$on('$routeChangeSuccess', function(next, current) {
                $scope.selectMenuOnLoad()
            });

            $scope.password = '';
            $scope.grade = function() {
                var size = $scope.password.length;
                if (size > 8) {
                    $scope.strength = 'strong';
                } else if (size > 3) {
                    $scope.strength = 'medium';
                } else {
                    $scope.strength = 'weak';
                }
            };
    });
});