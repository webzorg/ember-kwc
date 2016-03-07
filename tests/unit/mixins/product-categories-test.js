import Ember from 'ember';
import ProductCategoriesMixin from 'kwc/mixins/product-categories';
import { module, test } from 'qunit';

module('Unit | Mixin | product categories');

// Replace this with your real tests.
test('it works', function(assert) {
  let ProductCategoriesObject = Ember.Object.extend(ProductCategoriesMixin);
  let subject = ProductCategoriesObject.create();
  assert.ok(subject);
});
