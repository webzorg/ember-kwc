import Ember from 'ember';

export default Ember.Route.extend({
	
	activate(){
		Ember.$('#productsSpan1').fadeOut('slow');
	},
	deactivate(){
		Ember.$('#productsSpan1').fadeIn('slow');
	}
});
