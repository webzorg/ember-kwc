import Ember from 'ember';

export default Ember.Route.extend({
	activate(){
		Ember.$('#products-section-3').append(Ember.$('#liquid2_product'));
		Ember.$('#productsSpan3').fadeOut('slow');
	},
	deactivate(){
		Ember.$('#productsSpan3').fadeIn('slow');
	}
});
