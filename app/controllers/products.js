import Ember from 'ember';

export default Ember.Controller.extend({
  names:['lasha','abulashvili'],
  productsBottle: Ember.computed.filterBy('model', 'ptype', 'productsBottle'),
  productsQvevri: Ember.computed.filterBy('model', 'ptype', 'productsQvevri'),
  productsSpirit: Ember.computed.filterBy('model', 'ptype', 'productsSpirit'),

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
});
