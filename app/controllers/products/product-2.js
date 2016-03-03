import Ember from 'ember';

export default Ember.Controller.extend({
	productsQvevriAllArray: Ember.computed.filterBy('model', 'ptype', 'productsQvevri'),
	ptype2: Ember.computed.mapBy('productsQvevriAllArray', 'ptype2'),
	qvevri_unique_ptype2: Ember.computed.uniq('ptype2'),
});
