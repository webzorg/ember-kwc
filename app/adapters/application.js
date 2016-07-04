import JSONAPIAdapter from 'ember-data/adapters/json-api';
import Ember from 'ember';

export default JSONAPIAdapter.extend({
	i18n: Ember.inject.service(),
	namespace: Ember.computed.alias('i18n.locale'),
	host: 'http://api.socialatlas.net',
	//host: 'http://localhost:3000',
	pathForType: function(type) {
		return Ember.String.pluralize(Ember.String.underscore(type));
  	}
});
