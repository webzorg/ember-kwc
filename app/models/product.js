import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  ptype: DS.attr(),
  ptype2: DS.attr(),
  sdescription: DS.attr(),
  description: DS.attr(),
  thumb: DS.attr(),
  image: DS.attr()
});
