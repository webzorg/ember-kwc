import Ember from 'ember';

export default Ember.Component.extend({
	didInsertElement: function(){
		Ember.$('.kwicks').kwicks({
			behavior: 'menu',
		    maxSize: '75%',
		    spacing: 0,
		    duration: 800,
		});
	},
	actions: {
	    switchProductSection(dest,route){
	    	this.sendAction('switchProductSection', dest, route);
	    }
	}
});