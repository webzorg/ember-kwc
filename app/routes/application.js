import Ember from 'ember';

export default Ember.Route.extend({
    activate: function() {
    	Ember.run.schedule('afterRender', this, function() {
			Ember.$("#loader").remove();
		});
    },
    actions: {
	     refreshModel: function(){
	     	let currentRouteName = this.controllerFor("application").get("currentRouteName");
	     	if(currentRouteName==="about.index" || currentRouteName ==="products.index"){
	     		this.transitionTo("index");
	     	}	
	     	else{
	     		this.refresh();
	     	}
	     }
    }

});
