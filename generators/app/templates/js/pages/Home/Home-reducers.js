'use strict';

// import {
//   TEST_METHOD
// } from './Home-actions';

var initialState = {
  // testProp: null
};

export default function(state = initialState, action) {
  switch(action.type) {
    // case TEST_METHOD:
    //   let newState = {...state};
    //   newState.testProp = action.testProp;
    //   return newState;
    // break;
    default:
      return state;
  }
};
