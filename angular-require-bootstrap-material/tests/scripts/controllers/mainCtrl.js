/*Unit test case for testing controller*/

describe('mainCtrl', function(){
    beforeEach(module('app'));
    var $controller;
    beforeEach(inject(function(_$controller_){
        $controller = _$controller_
    }))

    describe('$scope.grade', function(){
        it('sets the strenght to "Strong if gt 8"', function(){
            var $scope = {};
            var controller = $controller('mainCtrl', { $scope: $scope });
            $scope.password = 'longerthaneightchars';
            $scope.grade();
            expect($scope.strength).toEqual('strong');
        })
    })
})