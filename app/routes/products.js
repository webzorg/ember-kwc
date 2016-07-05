import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return Ember.RSVP.hash({
			products: this.store.findAll('product'),
			productsSectionData: this.store.findAll('product-section')
		}); 
    },
    actions: {
	    willTransition(transition){
	    	if(transition.targetName==="products.index"){
	    		this.controllerFor('products').send('resetKwicks');
	    	}
	    }
    }
});