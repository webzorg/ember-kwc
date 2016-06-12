import Ember from 'ember';

export default Ember.Component.extend({
	selected: Ember.computed('selectedProduct', 'product', function() {
		return  this.get('selectedProduct') === this.get('product');
	}),
	didDestroyElement: function(){
		Ember.run.scheduleOnce('afterRender', this, function(){
			this.set('selectedProduct', null);
		});
	},
	actions: {
  		expandProduct: function(){
  			if(!this.get('selected'))
  			{
  				this.set('selectedProduct', this.get('product'));

  				Ember.$('.products-index-component').removeAttr('style');
  				this.$().closest('.products-index-component').css({
					'width' : '97%',
					//'background-color' : '#DCDCDC',
					'margin' : '1.5%',
				});
			
  			}else{
  				Ember.$('.products-index-component').removeAttr('style');
  			 	this.set('selectedProduct', null);
  			}  			
  		}
  	}
});
