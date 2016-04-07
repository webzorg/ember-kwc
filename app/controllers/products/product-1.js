import Ember from 'ember';
import productCategoriesMixin from 'kwc/mixins/product-categories';

export default Ember.Controller.extend(productCategoriesMixin, {
	productFilterValue: 'productsBottle',

	selectedType: null,
	actions: {
	    selectProductType(selectedTypeTemp) {
	      	this.set('selectedType', selectedTypeTemp);
	      	this.set('productFilterValue2', selectedTypeTemp);
	    }
	}
});