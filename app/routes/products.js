import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.findAll('product');
    },
    actions: {
	    willTransition(transition){
	    	if(transition.targetName==="products.index"){
	    		transition.abort();
	    	}
	    }
    }
});