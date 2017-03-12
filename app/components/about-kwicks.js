import Ember from "ember";

export default Ember.Component.extend({
  didInsertElement: function(){
    this.sendAction("resetKwicks");
  },
  actions: {
    switchAboutSection(dest, route){
      this.sendAction("switchAboutSection", dest, route);
    }
  }
});
