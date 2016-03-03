import Ember from 'ember';

export default Ember.Route.extend({
	activate(){
		Ember.$('#products-section-2').append(Ember.$('#liquid2_product'));
		Ember.$('#productsSpan2').fadeOut('slow');
	},
	deactivate(){
		Ember.$('#productsSpan2').fadeIn('slow');
	}
});
