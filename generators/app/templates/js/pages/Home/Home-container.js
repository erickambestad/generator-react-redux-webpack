import React from 'react';
import { connect } from 'react-redux';

// Page component to bind props and dispatchers to
import Home from './Home';

// Component actions
// import {
//   testMethod
// } from './Home-actions'

const mapStateToProps = (state) => {
  const sectionState = state.HomeReducer;
  return {
    //testProp: sectionState.testProp
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    // testMethod: (testProp) => {
    //   dispatch(testMethod(testProp))
    // }
  }
}

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeContainer;
