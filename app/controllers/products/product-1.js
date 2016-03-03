import Ember from 'ember';

export default Ember.Controller.extend({
	productsBottleAllArray: Ember.computed.filterBy('model', 'ptype', 'productsBottle'),
	ptype2: Ember.computed.mapBy('productsBottleAllArray', 'ptype2'),
	bottle_unique_ptype2: Ember.computed.uniq('ptype2'),
});
