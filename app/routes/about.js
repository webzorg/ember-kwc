import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
	    willTransition(transition){
	    	if(transition.targetName==="about.index"){
	    		transition.abort();
	    	}
	    }
    }
});
