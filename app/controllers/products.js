import Ember from 'ember';

export default Ember.Controller.extend({  
  isWormholeEnabled: false,
  productsDestination:'productsSection1',
  actions: {
    switchProductSection(dest,route){
      this.set('isWormholeEnabled',true);
      this.set('productsDestination', dest);
      this.transitionToRoute(route);
    }
  }
});