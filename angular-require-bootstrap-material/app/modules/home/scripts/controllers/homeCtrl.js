'use strict';
define(['app'], function(app)
{
    app.controller('homeCtrl',
        function($scope, $location, $mdDialog)
        {
        	    $scope.openMenu = function($mdOpenMenu, ev) {
			      originatorEv = ev;
			      $mdOpenMenu(ev);
			    };
            
        }
    );
});