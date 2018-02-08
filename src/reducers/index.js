import { combineReducers } from 'redux';

import user from './user';
import counter from './counter';
import nav from './navigation';

export default combineReducers({
  user,
  counter,
  nav
})

// libraries: () =>  []
