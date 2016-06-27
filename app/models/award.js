import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
	awardTitle: attr(),
	awardBody: attr(),
	medal: attr(),
	diploma: attr()
});
