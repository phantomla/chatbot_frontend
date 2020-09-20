import { createSelector } from 'reselect';
import { StateAll } from '../models';
import { UserState, initialUserState } from './model';

const rootSelector = (state: StateAll) =>
  state.user.user || initialUserState;

export const getEmployeeList = createSelector(
  rootSelector,
  (employeeState: UserState) => {
    return employeeState.info
      ? employeeState.info.response
      : initialUserState.info.response;
  }
);

