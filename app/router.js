import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route('products', function(){
      this.route('product-1');
      this.route('product-2');
      this.route('product-3');
    });
    this.route('gallery');
    this.route('about');
    this.route('contact');
});

export default Router;
