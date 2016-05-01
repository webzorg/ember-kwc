import Ember from 'ember';

export default Ember.Route.extend({
	activate(){
		Ember.$('#productsSpan2').fadeOut('slow');
	},
	deactivate(){
		Ember.$('#productsSpan2').fadeIn('slow');
	}
});
