import { FETCH_WEATHER } from '../actions/index';

//initial state is an array as we want to save the action.payload.data
//objects that are returned by the resolved promise
export default function(state = [], action) {
//account for string inputs that aren't cities
  if (action.error) {
  return state;
  }

  switch(action.type) {
    case FETCH_WEATHER:
    //important for react: not mutating state, we are returning a new instance of state
      //return state.concat([ action.payload.data ]);
      //code in line 9 is same as 12 - ES6 syntax -
      //note data is inserted at front of arrat with line 12
      return [ action.payload.data, ...state]; // [city, city, city ] NOT [city, [city, city ]]
  }

  return state;
}
