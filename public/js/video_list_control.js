angular.module("myApp").controller('videoController', ['$scope','DataService', function( $scope, DataService ){

	$scope.params = {};
	$scope.scrollPos = 0;
	$scope.scrollWidth = 800;//800;//214;


	var _keysHandler = {
		//NEXT
		39: function(){
			if( $scope.selectedVideo.index < $scope.params.videos.length - 1 )
				$scope.selectVideo( $scope.params.videos[ $scope.selectedVideo.index + 1 ]);
		},
		//PREV
		37:function(){
			if( $scope.selectedVideo.index > 0 )
				$scope.selectVideo( $scope.params.videos[ $scope.selectedVideo.index - 1 ]);
		},
		//PLAY
		13: function(){
			if($scope.selectedVideo)
				$scope.play( $scope.selectedVideo );
		}
	};

	$scope.init = function(){
		$scope.showVideoBar();
	}

	$scope.selectVideo = function( video ){
		if($scope.selectedVideo )
			$scope.selectedVideo.selectedClass = '';

		$scope.selectedVideo = video || this.video;
		$scope.selectedVideo.selectedClass = 'video-selected';

		//auto scroll screen based on selected video position
		var positionRatio = $('#vid_' + $scope.selectedVideo.id ).offset().left/$('body').width();

		if( positionRatio < 0.2 )
			$scope.scroll('LEFT');
		else if( positionRatio > 0.8 )
			$scope.scroll('RIGHT');

	}

    $scope.onKeyDown = function(  $event ){
		if( _keysHandler[$event.keyCode ])
			_keysHandler[$event.keyCode ]();
	}

	$scope.play = function( video ){
		angular.element('#video-player-modal').scope().loadVideo( video || this.video );
	}

	$scope.showVideoBar = function(){
		DataService.videos().then( function( response ){
			var index = 0;
			$scope.params.videos = _.map( response.data.entries, function( video ){
				if(video.images && video.images.length > 0 )
					video.imgUrl = video.images[0].url;

				video.imgUrl = video.imgUrl || API_CONFIG.DEFAULT_VIDEO_IMG;
				// $("img").on("load",function(){
                 //    video.imgUrl = video.imgUrl;
                 //    $scope.scrollWidth = video.contents[0].width;
				// }).on("error",function(){
                 //    video.imgUrl = API_CONFIG.DEFAULT_VIDEO_IMG;
                //
				// });
				video.url = video.contents[0].url;
				video.title = video.title.trim();
				video.name = video.title.length > 20? video.title.substr(0, 20) + '...' : video.title;
				video.index = index;
				video.viewDate = null;
				index++;

				return video;
			});
			localStorage['videos'] = JSON.stringify($scope.params.videos);

		});
	}


	$scope.scroll = function( direction ) {
        if (direction == 'LEFT') {
            $scope.scrollPos -= $scope.scrollWidth;

        } else{
            $scope.scrollPos += $scope.scrollWidth;
    	}
		$('#slide-container').animate({
            scrollLeft: $scope.scrollPos
        }, $scope.scrollWidth);
	}

	$scope.freshVideos = function(){
		$scope.init();
	}
	$scope.showViewedHistory = function(){
        angular.element('#video-history-container').scope().showViewedHistory( );
	}

}]);
