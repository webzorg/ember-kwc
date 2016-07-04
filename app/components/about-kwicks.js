import Ember from 'ember';

export default Ember.Component.extend({
	didInsertElement: function(){
		Ember.$('.kwicks').kwicks({
			behavior: 'menu',
			delayMouseIn: 10000000,
		    maxSize: '75%',
		    spacing: 0,
		    duration: 800,
		});
	},
	actions: {
		switchAboutSection(dest,route){
	    	this.sendAction('switchAboutSection', dest, route);
	    }
	}
});
