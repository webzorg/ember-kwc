import Ember from 'ember';

export default Ember.Controller.extend({
  isWormholeEnabled: false,
  aboutDestination:'aboutSection1',
  actions: {
    switchAboutSection(dest,route){

	    	console.log("products-controller");
      this.set('isWormholeEnabled',true);
      this.set('aboutDestination', dest);
      this.transitionToRoute(route);
    }
  }
});
