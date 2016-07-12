import Ember from 'ember';
//import LightboxComponent from 'ember-cli-lightbox/components/light-box';
//import layout from '../templates/components/custom-light-box';


export default Ember.Component.extend({
	//layout: layout,
	tagName: 'a',
	attributeBindings: ['href', 'data-lightbox', 'data-title', 'data-class'],
	classNames: ['custom-ember-lightbox'],
	classNameBindings: ['inlineImage']

});