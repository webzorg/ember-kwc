import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.findAll('about-section-datum');
    },
	actions: {
	    willTransition(transition){
	    	if(transition.targetName==="about.index"){
	    		transition.abort();
	    	}
	    }
    }
});
