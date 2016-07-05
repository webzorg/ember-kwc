import Ember from 'ember';

export default Ember.Component.extend({
	didInsertElement: function(){
    	this.sendAction("resetKwicks");
		//Ember.$('.kwicks').kwicks('select', 0);
		//this.sendAction('switchProductSection', 'productsSection1', 'products.product-1');
	},
	actions: {
	    switchProductSection(dest,route){
	    	this.sendAction('switchProductSection', dest, route);
	    }
	}
});
