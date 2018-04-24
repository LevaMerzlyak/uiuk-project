function VideoPlay(sSelector) {
	
	var v = this;

	v.playBtn = $(sSelector);

	v.container = $('.videoAbout__wrap');
	v.playerWrap = v.container.find('.video__wrap')
	v.player = v.container.find('#video1');
	v.playerDOM = v.player.get(0);

	v.closeBtn = v.container.find('.btn_videoClose');

	v.volumeChanged = false;

	var opened = 'videoAbout_open';

	v.playPause = function () {

		v.playerDOM.onvolumechange = function() {

			v.volumeChanged = true;

		}

		if (!v.volumeChanged) {

			v.playerDOM.volume = 0.2;

		}
		
		if (v.playerDOM.paused) {

			v.playerDOM.play();

		} else {

			v.playerDOM.pause();

		}

	}

	v.playStart = function (event) {

		event.preventDefault();		

		v.container.addClass(opened);

		p1.scrollBlock = !p1.scrollBlock;
		
		v.setHeight();

		setTimeout(function () {
			
			v.playPause();

		}, 2000);

	}

	v.playStop = function (event) {
		
		event.preventDefault();

		v.container.removeClass(opened);

		p1.scrollBlock = !p1.scrollBlock;

		v.playerWrap.css('height', 0);

		v.playerDOM.pause();

	}

	v.setHeight = function (event) {

		var height = v.player.height();

		v.playerWrap.css('height', height);

		if (event) {

			console.log('resize');

			v.playerWrap.addClass('video__wrap_resize');

			setTimeout(function () {
				
				v.playerWrap.removeClass('video__wrap_resize');

			}, 2000);

		}

	}

	v.playBtn.click(v.playStart);
	v.closeBtn.click(v.playStop);
	$(window).on("resize", v.setHeight);

}