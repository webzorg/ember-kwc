import Ember from 'ember';

export default Ember.Controller.extend({
  productsBottle: Ember.computed.filterBy('model', 'ptype', 'productsBottle'),
  productsQvevri: Ember.computed.filterBy('model', 'ptype', 'productsQvevri'),
  productsSpirit: Ember.computed.filterBy('model', 'ptype', 'productsSpirit'),


  //testArray: [{name: 'lasha'},{name: 'zoro'}],
  selectedValue: 2,

  actions: {
    change() {
      //const changeAction = this.send('someAction');
      const selectedEl = Ember.$('select')[0];
      const selectedIndex = selectedEl.selectedIndex;
      //const testArray = this.get('testArray');
      const selectedValue = this.get('productsBottle')[selectedIndex];
      
      console.log("selectedValue: " + selectedValue.name);
      console.log(selectedEl[0].name);
      //Ember.set('selectedValue', selectedValue);
      //changeAction(selectedValue);
    },
    someAction(){

    }
  },
  
  breakpoints: [{
          'breakpoint': 1024,
          'settings': {
            'slidesToShow': 4
          }
        },{
          'breakpoint': 768,
          'settings': {
            'slidesToShow': 3
          }
        }]
});