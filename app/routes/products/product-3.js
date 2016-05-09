import Ember from 'ember';

export default Ember.Route.extend({
	activate: function(){
		this.controllerFor('products.product-3').setProperties({
			'optionsMenuShowing': false, 
			'selectedType': null,
			'productFilterValue2': null
		});
	}
});
