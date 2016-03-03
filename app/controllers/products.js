import Ember from 'ember';

export default Ember.Controller.extend({  

  actions: {
    change() {
      console.log("products action");
      //const changeAction = this.send('someAction');
      //const selectedEl = Ember.$('select')[0];
      //const selectedIndex = selectedEl.selectedIndex;
      //const testArray = this.get('testArray');
      //const selectedValue = this.get('productsBottle')[selectedIndex];
      
      //console.log("selectedValue: ");
      //console.log(selectedEl[0].name);
      //Ember.set('selectedValue', selectedValue);
      //changeAction(selectedValue);

    }
  }
  /*
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
  */
});