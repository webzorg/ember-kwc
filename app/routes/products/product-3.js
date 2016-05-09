import Ember from 'ember';

export default Ember.Route.extend({
	activate: function(){
		this.controllerFor('products.product-3').set('optionsMenuShowing', false);
	}
});
