import { NavigationActions } from 'react-navigation';
import { Root } from '../navigation/AppNavigator';

// initial router to login screen
const firstAction = Root.router.getActionForPathAndParams('Main');
const initialNavState = Root.router.getStateForAction(firstAction);

export default (state, action) => {
  console.log(action)
  let nextState;
  switch (action.type) {
    case 'test/NEXT_SCREEN':
      nextState = Root.router.getStateForAction(
        NavigationActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'Test' })]
        }),
        state
      );
      break;
    case 'BACK_SCREEN':
      nextState = Root.router.getStateForAction(
        NavigationActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'Main'})]
        })
      );
      break;
    default:
      nextState = Root.router.getStateForAction(action, state);
    break;
  }
  return nextState || state;
};
