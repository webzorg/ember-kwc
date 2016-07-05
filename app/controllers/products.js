import Ember from 'ember';

export default Ember.Controller.extend({  
  isWormholeEnabled: false,
  productsDestination:'productsSection1',
  actions: {
    switchProductSection(dest,route){
      this.set('isWormholeEnabled',true);
      this.set('productsDestination', dest);
      this.transitionToRoute(route);
    },
    resetKwicks(){
    	Ember.$('.kwicks').kwicks('destroy');
    	Ember.$('.kwicks').kwicks({
			behavior: 'menu',
			delayMouseIn: 10000000,
		    maxSize: '75%',
		    spacing: 0,
		    duration: 800,
		});
    }
  }
});