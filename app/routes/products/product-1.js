import Ember from 'ember';

export default Ember.Route.extend({
	activate: function(){
		this.controllerFor('products.product-1').set('optionsMenuShowing', false);
		this.controllerFor('products.product-1').set('selectedType', null);
		this.controllerFor('products.product-1').set('productFilterValue2', null);		
	}	
});
