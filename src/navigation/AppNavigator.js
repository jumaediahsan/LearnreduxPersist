import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import NavMain from './NavMain';
import NavTest from './NavTest';

export const Root = StackNavigator ({
  Main: NavMain,
  Test: NavTest,
});

const AppNavigator = ({ dispatch, nav }) => {
  console.log(nav);
  return <Root navigation={addNavigationHelpers({ dispatch, state: nav })} />;
};


const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(mapStateToProps)(AppNavigator);
