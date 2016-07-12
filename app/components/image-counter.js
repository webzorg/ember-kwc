import Ember from 'ember';

export default Ember.Component.extend({
	didInsertElement: function(){
		Ember.$('.generic-content-images').each(function(){
			let numberOfChildren = Ember.$(this).children().length;
			
			Ember.$(this).children().slice(4).hide();
			Ember.$('.generic-image-counter').clone().appendTo(Ember.$(this).find('.generic-image-wrapper-first > .generic-image'));
			Ember.$(this).find('.generic-image-counter').text("+"+(numberOfChildren-1));
			if(numberOfChildren>1 && numberOfChildren <4){
				Ember.$(this).find('.generic-image-wrapper-first').siblings().hide();
			}
		});
	}
});
