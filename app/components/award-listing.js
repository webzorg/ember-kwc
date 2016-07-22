import Ember from 'ember';

export default Ember.Component.extend({
	awardSelected: Ember.computed('selectedAward', 'award', function() {
		return  this.get('selectedAward') === this.get('award');
	}),
	didDestroyElement: function(){
		Ember.run.scheduleOnce('afterRender', this, function(){
			this.set('selectedAward', null);
		});
	},
	actions: {
  		expandAward: function(){
  			if(!this.get('awardSelected'))
			{
  				this.set('selectedAward', this.get('award'));
  				Ember.$('.awards-index-component').removeClass("awardsExpanded2");
  				this.$().closest('.awards-index-component').addClass("awardsExpanded2");
			}else{
  				Ember.$('.awards-index-component').removeClass("awardsExpanded2");
  				this.set('selectedAward', null);
  			}  			
  		}
  	}
});
