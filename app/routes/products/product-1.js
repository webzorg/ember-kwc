import Ember from 'ember';

export default Ember.Route.extend({
	activate: function(){
		this.controllerFor('products.product-1').setProperties({
			'optionsMenuShowing': false, 
			'selectedType': null,
			'productFilterValue2': null
		});
	}	
});
