import Ember from 'ember';

export default Ember.Component.extend({
	didInsertElement: function(){

		Ember.$('.swiper-wrapper').children('div').each(function (index) {
		    Ember.$(this).css('background-image', 'url("/assets/images/slideshow/'+index+'.jpg")');
		});
		Ember.$('.swiper-wrapper').hide();
		
		var swiperLoad = imagesLoaded(Ember.$(".swiper-wrapper"));
		swiperLoad.on('done', ()=> {				
			Ember.$('.swiper-wrapper').fadeIn(1600);
			Ember.$('#loader-gif').remove();

			var mySwiper = new Swiper ('.swiper-container', {
	    		loop: true,
	    		speed:1000,
				autoplay:5000,
				autoplayDisableOnInteraction: false,
				pagination: '.swiper-pagination',
				paginationType:'bullets',
				paginationClickable:true,
				//grabCursor:true,
				effect: 'fade',
				fade: {crossFade: false}
				//cube: {slideShadows: true, shadow: true, shadowOffset: 20, shadowScale: 0.94},
				//coverflow: {rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows : true},
				//flip: {slideShadows : true, limitRotation: true},
			});
			this.set('mySwiper', mySwiper);
		});

	}

});
