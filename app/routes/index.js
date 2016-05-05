import Ember from 'ember';

export default Ember.Route.extend({
	activate: function(){
		Ember.run.scheduleOnce('afterRender', this, function() {
			
			var mySwiper = new Swiper ('.swiper-container', {
	    		loop: true,
	    		speed:1500,
    			autoplay:5000,
    			autoplayDisableOnInteraction: false,
    			//pagination: '.swiper-pagination',
    			grabCursor:true
  			});
  			this.set('mySwiper', mySwiper);
		});
	}
});