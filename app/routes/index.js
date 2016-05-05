import Ember from 'ember';

export default Ember.Route.extend({
	activate: function(){
		Ember.run.scheduleOnce('afterRender', this, function() {
			var mySwiper = new Swiper ('.swiper-container', {
	    		loop: true,
	    		speed:1000,
    			autoplay:5000,
    			autoplayDisableOnInteraction: false,
    			//pagination: '.swiper-pagination',
    			grabCursor:true,
    			effect: 'fade',
				fade: {crossFade: false},
				//cube: {slideShadows: true, shadow: true, shadowOffset: 20, shadowScale: 0.94},
				//coverflow: {rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows : true},
				//flip: {slideShadows : true, limitRotation: true}
  			});
  			this.set('mySwiper', mySwiper);
		});
	}
});