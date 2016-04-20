import Ember from 'ember';

export default Ember.Route.extend({
	activate: function(){
		Ember.run.scheduleOnce('afterRender', this, function() {
			Ember.$('.kwicks').kwicks({
				behavior: 'menu',
			    maxSize: '75%',
			    spacing: 0,
			    duration: 800,
			});
		});
	}
});
