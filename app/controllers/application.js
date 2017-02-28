import Ember from "ember";

export default Ember.Controller.extend({
  // init_legality: Ember.computed(function() {
  //   // return localStorage.getItem("legality");
  //   if(localStorage.getItem("legality")) {
  //     return "yeyes";
  //   } else {
  //     return "nonono";
  //   }
  // },
  legalityBoolean: Ember.computed(function() {
    if(localStorage.getItem("legality") === "true") {
      return true;
    } else {
      return false;
    }
  }),
  actions: {
    isLegal: function() {
      localStorage.setItem("legality", true);
      Ember.$(".legality-checker-wrapper").hide("slow", function() {
        Ember.$(".legality-checker-wrapper").remove();
      });
    },
    isIllegal: function(){
      localStorage.setItem("legality", false);
      Ember.$(".is-legal").hide("slow", function() {
        window.location.href = "https://www.google.com/ncr";
      });
    }
  }

});
