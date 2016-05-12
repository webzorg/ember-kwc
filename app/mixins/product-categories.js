import Ember from 'ember';

/*"use strict";
var _Ember = Ember;
var Mixin = _Ember.Mixin;
var computed = _Ember.computed;
var uniq = _Ember.computed.uniq; 
//equivalent to the line below*/
const { Mixin, computed, computed: { uniq } } = Ember;


export default Mixin.create({
	actions: {
		toggleProductsOptions(){
				
			this.toggleProperty('optionsMenuShowing');
			if(this.get('optionsMenuShowing')){
				Ember.$("#productsOptionsContainer").addClass('productsOptionsContainerBackground');
			}else{
				Ember.$("#productsOptionsContainer").removeClass('productsOptionsContainerBackground');
			}
		},
		selectProductType(selectedTypeTemp) {
	      	this.set('selectedType', selectedTypeTemp);
	      	this.set('productFilterValue2', selectedTypeTemp);
	    }
	},
	selectedType: null,
	productFilterKey: 'ptype', 
	productFilterValue: null,
	productFilterKey2: 'ptype2',
	productFilterValue2: null, 
	productsMapKey: 'ptype2',
	
	filteredProducts: computed('model.products.[]', 'productFilterKey', 'productFilterValue', function() {
	  let model = this.get('model.products');
	  let productFilterKey = this.get('productFilterKey');
	  let productFilterValue = this.get('productFilterValue');

	  return model.filterBy(productFilterKey, productFilterValue);
	}),

	mappedProducts: computed('filteredProducts', 'productsMapKey', function() {
		return this.get('filteredProducts').mapBy(this.get('productsMapKey'));
	}),

	uniqueMappedProducts: uniq('mappedProducts'),

	dynamicallyFilteredProducts: computed('filteredProducts', 'productFilterKey2', 'productFilterValue2', function() {
	let {
		filteredProducts,
		productFilterKey2,
		productFilterValue2
	} = this.getProperties('filteredProducts', 'productFilterKey2', 'productFilterValue2');
		if(productFilterValue2!=null)
		{
			return filteredProducts.filterBy(productFilterKey2, productFilterValue2);
		}
		else
		{
			return filteredProducts;
		}
	})

});
