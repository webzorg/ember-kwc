import Ember from 'ember';

export default Ember.Component.extend({
	didInsertElement: function(){
		
		var swiperLoad = imagesLoaded(Ember.$(".swiper-wrapper"));
		swiperLoad.on('done', ()=> {				

			var mySwiper = new Swiper ('.swiper-container', {
	    		loop: true,
	    		speed:1000,
				autoplay:10000,
				autoplayDisableOnInteraction: false,
				pagination: '.swiper-pagination',
				paginationType:'bullets',
				paginationClickable:true,
				lazyLoading:true,
				lazyLoadingInPrevNext:true,
				grabCursor:true,
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
