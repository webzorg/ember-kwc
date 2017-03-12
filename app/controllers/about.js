import Ember from "ember";

export default Ember.Controller.extend({
  isWormholeEnabled: false,
  aboutDestination:"aboutSection1",
  actions: {
    switchAboutSection(dest, route){
      this.set("isWormholeEnabled",true);
      this.set("aboutDestination", dest);
      this.transitionToRoute(route);
    },
    resetKwicks(){
      Ember.$(".kwicks").kwicks("destroy");
      Ember.$(".kwicks").kwicks({
        behavior: "menu",
        delayMouseIn: 10000000,
        maxSize: "75%",
        spacing: 0,
        duration: 800,
      });
    }
  }
});
