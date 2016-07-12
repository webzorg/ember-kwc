import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  newsTitle: attr(),
  newsBody: attr(),
  imagesArray: attr()
});
