import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  name: attr(),
  ptype: attr(),
  ptype2: attr(),
  sdescription: attr(),
  description: attr(),
  image: attr()
});
