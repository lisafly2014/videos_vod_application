angular.module("myApp").controller('videoHistoryController', ['$scope',function( $scope){

    $scope.viewedHistory={};

    $scope.showViewedHistory = function(){
        $scope.hasHistoryChecked = !$scope.hasHistoryChecked;

        $scope.viewedHistory.videos = JSON.parse(localStorage['videos']);
        $scope.viewedHistory.videos.sort(function(a,b) {
        	return a.viewDate >= b.viewDate;
        });

    }


}]);