import { combineReducers } from 'redux';
import userReducers from './user/reducers';

// export { default as session } from './session';

export const rootReducers = combineReducers({
  user: userReducers,
  // session,
});
