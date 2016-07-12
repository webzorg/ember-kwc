import JSONAPIAdapter from 'ember-data/adapters/json-api';
import Ember from 'ember';
import ENV from "../config/environment";

export default JSONAPIAdapter.extend({
	i18n: Ember.inject.service(),
	namespace: Ember.computed.alias('i18n.locale'),
	host: ENV.host,
	pathForType: function(type) {
		return Ember.String.pluralize(Ember.String.underscore(type));
  	}
});
