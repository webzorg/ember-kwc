import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['accordion-component'],
	didInsertElement() {

    	this.$().foundation();
  	}
});
