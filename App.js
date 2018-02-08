import React from 'react';
import { AsyncStorage, ActivityIndicator } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, autoRehydrate } from 'redux-persist'
import store from './src/store';
import AppNavigator from './src/navigation/AppNavigator';

import Test from './src/Test';

export default class App extends React.Component {
  // state = {
  //   isReady: false
  // }
  //
  // componentDidMount() {
  //   persistStore(
  //     store,
  //     {
  //       storage: AsyncStorage,
  //       whitelist: ['user', 'counter', Test]
  //     },
  //     () => {
  //       this.setState({ isReady: true })
  //     }
  //   )
  // }


  render() {
    // 
    // if (!this.state.isReady) {
    //   return <ActivityIndicator size='large' />
    // }

    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
