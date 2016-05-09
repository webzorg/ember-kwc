import Ember from 'ember';
import productCategoriesMixin from 'kwc/mixins/product-categories';

export default Ember.Controller.extend(productCategoriesMixin, {
	productFilterValue: 'productsBottle',
	optionsMenuShowing:false,
	selectedType: null,
	actions: {
		toggleProductsOptions(){
				
			this.toggleProperty('optionsMenuShowing');
			if(this.get('optionsMenuShowing'))
			{
				Ember.$("#productsOptionsContainer").addClass('productsOptionsContainerBackground');
			}else{
				Ember.$("#productsOptionsContainer").removeClass('productsOptionsContainerBackground');
			}
		},
	    selectProductType(selectedTypeTemp) {
	      	this.set('selectedType', selectedTypeTemp);
	      	this.set('productFilterValue2', selectedTypeTemp);
	    }
	}
});