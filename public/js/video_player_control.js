angular.module("myApp").controller('videoPlayerController', ['$scope','DataService',
    function( $scope, DataService ){
        $scope.startTime = null;
        $scope.params = {
            video:null
        };

        $scope.init = function(){
            //close video modal when video is finished.
            $('#video-player-modal video').bind('ended', function() {
                $('#video-player-modal').modal('hide');
            });
            $('#video-player-modal').on('hidden.bs.modal', function () {
                $('#video-player-modal video').attr('src', '');
            });
        }


        $scope.loadVideo = function( video ){
            $scope.params.video = video;

            $('#video-player-modal video').attr('src', video.url );

            $('#video-player-modal').modal('show');
            $scope.startTime = new Date().getTime() / 1000;
            var videos = JSON.parse(localStorage['videos']);
            videos.filter(function(item){
                if(item.index ==video.index){
                    item.viewDate = $scope.startTime;
                }
            });
            localStorage['videos'] = JSON.stringify(videos);
            console.log(videos);
        }

    }]);