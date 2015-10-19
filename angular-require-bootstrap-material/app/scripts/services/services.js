/**
 * Created by ravic on 19-09-2015.
 */
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

    app.directive('carousel', function() {
        return {
            restrict: 'E',
            transclude: true,
            templateUrl:'views/carousel.html'
        };
    });

    app.directive('sap', function() {
        return {
            restrict: 'E',
            transclude: true,
            template:'<div style="width: 100%;height: 25px;margin: 0 auto;text-align: center;padding: 70px 0">' +
            '<img src="imgs/sap.png"/>'+
            '</div>'
        };
    });

    app.directive('datePicker', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs, ngModelCtrl) {
                $(element).datepicker({
                    dateFormat: 'dd MM, yy',
                    onSelect: function (date) {
                    }
                });
                element.parent().append('<i class="fa fa-calendar date-picker-calender"></i>');
            }
        };
    });

    app.directive('room', function() {
        return {
            restrict: 'AE',
            transclude: true,
            templateUrl:'views/room-list-card.html'
        };
    });


});