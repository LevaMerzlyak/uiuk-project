function VideoPlay(sSelector) {
	
	var v = this;

	v.playBtn = $(sSelector);

	v.container = $('.videoAbout__wrap');
	v.playerWrap = v.container.find('.video__wrap')
	v.player = v.container.find('#video1');
	v.videoPlayer = videojs('#video1');

	v.closeBtn = v.container.find('.btn_videoClose');

	v.winW = $(window).width();

	var opened = 'videoAbout_open';

	v.playPause = function () {
		
		if (v.videoPlayer.paused) {

			v.videoPlayer.play();

		} else {

			v.videoPlayer.pause();

		}

	}

	v.playStart = function (event) {

		event.preventDefault();		

		v.container.addClass(opened);

		p1.scrollBlock = !p1.scrollBlock;

		setTimeout(function () {
			
			//if (v.winW > 1025) v.playPause();

		}, 2000);

	}

	v.playStop = function (event) {
		
		event.preventDefault();

		v.container.removeClass(opened);

		p1.scrollBlock = !p1.scrollBlock;

		v.playerWrap.css('height', 0);

		//if (v.winW > 1025) v.videoPlayer.pause();

	}

	v.setHeight = function () {

		v.winW = $(window).width();

		v.playerWrap.addClass('video__wrap_resize');

		setTimeout(function () {
			
			v.playerWrap.removeClass('video__wrap_resize');

		}, 2000);

	}

	v.playBtn.click(v.playStart);
	v.closeBtn.click(v.playStop);
	$(window).on("resize", v.setHeight);

}