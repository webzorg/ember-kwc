import Ember from 'ember';

export default Ember.Controller.extend({  

  
  isWormholeEnabled: false,
  productsDestination:'products-section-1',
  actions: {
    switchProductSection(dest,route){
        this.set('isWormholeEnabled',true);
        this.set('productsDestination', dest);
        this.transitionToRoute(route);
      }
  }
  
  /*
  breakpoints: [{
          'breakpoint': 1024,
          'settings': {
            'slidesToShow': 4
          }
        },{
          'breakpoint': 768,
          'settings': {
            'slidesToShow': 3
          }
        }]
  */
});