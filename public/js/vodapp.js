var myApp = angular.module('myApp', []);

myApp.factory('DataService', [ '$http', function( $http ) {
    return {
        videos: function(){
            return $http.get(API_CONFIG.DEFAULT_VIDEO_URL);
        }
    }
}]);