import Ember from 'ember';

export default Ember.Route.extend({

	model: function() {
    console.log();
		return this.store.findAll('contact').then(allSections => { return allSections.objectAt(0); });
  }
});
