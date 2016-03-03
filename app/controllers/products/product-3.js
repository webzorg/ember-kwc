import Ember from 'ember';

export default Ember.Controller.extend({
	productsSpiritAllArray: Ember.computed.filterBy('model', 'ptype', 'productsSpirit'),
	ptype2: Ember.computed.mapBy('productsSpiritAllArray', 'ptype2'),
	spirit_unique_ptype2: Ember.computed.uniq('ptype2'),
});
