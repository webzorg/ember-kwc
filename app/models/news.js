import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  newsTitle: attr(),
  newsBody: attr(),
  image: attr(),
  largeimg: attr()
});
