import Ember from 'ember';

export default Ember.Route.extend({
	activate(){
		Ember.$('#productsSpan3').fadeOut('slow');
	},
	deactivate(){
		Ember.$('#productsSpan3').fadeIn('slow');
	}
});
