function PageScroll(sSelector) {
	
	var p = this;

	var current = 'page_current',
		fromBottom = 'page_fromBottom',
		toTop = 'page_toTop'
		;

	p.body = $(sSelector);
	p.pages = p.body.find('.page');
	p.length = p.pages.length;
	p.current = 0;

	p.scrollBlock = false;
	p.scrollDelay = 3300;

	p.scrollBtn = p.body.find('.scrollBtn');

	p.pags = p.body.find('.pagePag__item');
	p.pag = p.body.find('.pagePag__link');

	p.showPage = function () {

		p.scrollBlock = true;

		p.pages.removeClass(current);
		
		p.pages.each(function (index, el) {

			if (index < p.current) {

				if (!$(el).hasClass(toTop)) $(el).addClass(toTop).removeClass(fromBottom);

			} else if (index == p.current) {

				$(el).addClass(current).removeClass(toTop).removeClass(fromBottom);

			} else if (index > p.current) {

				if (!$(el).hasClass(fromBottom)) $(el).addClass(fromBottom).removeClass(toTop);

			}

		});

		p.pags.removeClass('pagePag__item_active');

		p.pags.eq(p.current).addClass('pagePag__item_active');

		if (p.current == p.length - 1) {

			setTimeout(function () {
			
				p.scrollBtn.find('.icon').removeClass('icon_down').addClass('icon_up');

			}, p.scrollDelay);

		} else {
			setTimeout(function () {

				p.scrollBtn.find('.icon').addClass('icon_down').removeClass('icon_up');

			}, p.scrollDelay);
		}

		if (p.current != 0) {

			s1.stopSlider();

		} else {

			s1.changeSlider();

		}

		setTimeout(function () {
			
			p.scrollBlock = false;

		}, p.scrollDelay);

	}

	p.scrollDown = function () {
	
		if (p.current === p.length - 1) return;

		p.current++;

		p.showPage();

	};

	p.scrollUp = function () {		
	
		if (p.current === 0) return;

		p.current--;

		p.showPage();

	};

	p.scrollTop = function () {
		
		p.current = 0;

		p.showPage();

	};

	p.scrollBtnCheck = function (event) {
		
		event.preventDefault();

		var target = $(event.target);

		if (target.children().hasClass('icon_down') || target.hasClass('icon_down')) {

			p.scrollDown();

		} else {

			p.scrollTop();

		}

	};

	p.pagination = function (event) {

		event.preventDefault();

		var target = $(event.target);

		p.current = target.closest('.pagePag__item').index();

		p.showPage();

	}

	p.scrollBtn.click(p.scrollBtnCheck);

	p.pag.click(p.pagination);

	$(document).keydown(function(event) {

		if (event.which == 40) {

			p.scrollDown();

		} else if (event.which == 38) {

			p.scrollUp();

		}

	});
	$(document).on("mousewheel DOMMouseScroll", function (event) {
		
		if (p.scrollBlock) return;

		if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {

			p.scrollUp();

		} else {

			p.scrollDown();

		}

	});
	
}