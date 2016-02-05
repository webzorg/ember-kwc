import Ember from 'ember';

export default Ember.Controller.extend({
	breakpoints: [
        {
          'breakpoint': 768,
          'settings': {
            'slidesToShow': 3
          }
        },
        {
          'breakpoint': 460,
          'settings': {
            'slidesToShow': 1
          }
        }
    ]
});
