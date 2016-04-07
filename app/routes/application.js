import Ember from 'ember';

export default Ember.Route.extend({
    activate: function() {
    	Ember.run.schedule('afterRender', this, function() {
			Ember.$("#loader").remove();
		});
    }

});
