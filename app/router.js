import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    //this.route('about',  {path: '/about/:id'});
    this.route('about', function() {
      this.route('about-1');
      this.route('about-2');
      this.route('about-3');
    });
    this.route('products', function(){
      this.route('product-1');
      this.route('product-2');
      this.route('product-3');
    });
    this.route('news');
    this.route('awards');
});

export default Router;
