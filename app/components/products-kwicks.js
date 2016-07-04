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
		//Ember.$('.kwicks').kwicks('select', 0);
		//this.sendAction('switchProductSection', 'productsSection1', 'products.product-1');
	},
	actions: {
	    switchProductSection(dest,route){
	    	this.sendAction('switchProductSection', dest, route);
	    }
	}
});
