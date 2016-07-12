import Ember from 'ember';
import productCategoriesMixin from 'kwc/mixins/product-categories';

export default Ember.Controller.extend(productCategoriesMixin, {
	productFilterValue: 'productsQvevri'
});
