import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.findAll('slide').then(allSections => { return allSections.objectAt(0); });
  }
});
