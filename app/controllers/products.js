import Ember from 'ember';

export default Ember.Controller.extend({
	breakpoints: [
        {
          'breakpoint': 1024,
          'settings': {
            'slidesToShow': 4
          }
        },
        {
          'breakpoint': 768,
          'settings': {
            'slidesToShow': 3
          }
        }
    ]
});
