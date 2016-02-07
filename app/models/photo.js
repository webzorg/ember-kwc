import DS from 'ember-data';

export default DS.Model.extend({
	src: DS.attr(),
  	w: DS.attr(),
  	h: DS.attr(),
  	title: DS.attr()  
});
