import JSONAPIAdapter from 'ember-data/adapters/json-api';
import Ember from 'ember';

export default JSONAPIAdapter.extend({
	//namespace: 'api'
	host: 'http://api.socialatlas.net',
	pathForType: function(type) {
    	return Ember.String.pluralize(Ember.String.underscore(type));
  	}
});
