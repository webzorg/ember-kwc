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
  				Ember.$('.products-index-component').removeClass("prouctsExpanded");
  				this.$().closest('.products-index-component').addClass("prouctsExpanded");
			}else{
  				Ember.$('.products-index-component').removeClass("prouctsExpanded");
  				this.set('selectedProduct', null);
  			}  			
  		}
  	}
});
