import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.findAll('about-section-datum');
		//{{about-kwicks switchAboutSection=(action "switchAboutSection") class="kwicks kwicks-horizontal"}}

    },
	actions: {
	    willTransition(transition){
	    	if(transition.targetName==="about.index"){
	    		transition.abort();
	    	}
	    }
    }
});
