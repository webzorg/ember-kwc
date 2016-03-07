import Ember from 'ember';

const { Mixin, computed, computed: { uniq } } = Ember;

export default Mixin.create({
	productFilterKey: 'ptype', 
	productFilterValue: null,
	productFilterKey2: 'ptype2',
	productFilterValue2: null, 
	productsMapKey: 'ptype2',
	filteredProducts: computed('model', 'productFilterKey', 'productFilterValue', function() {
	let {
		model,
		productFilterKey,
		productFilterValue
	} = this.getProperties('model', 'productFilterKey', 'productFilterValue');
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
			return filteredProducts.filterBy(productFilterKey2, productFilterValue2);
		else
			return filteredProducts
	})
	


});
