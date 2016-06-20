import Ember from 'ember';


//for zf-accordion
export function customIf(params) {
  	if(params[0] === params[1]){
  		return params[2];        
  	}
	
}

export default Ember.Helper.helper(customIf);
