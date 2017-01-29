import { combineReducers } from 'redux';

import { LOAD_TODOS, SET_VISIBILITY_FILTER } from '../actions/actionTypes';
import { VisibilityFilters } from '../actions/actionTypes';


function todos(state = [], action) {
  
  switch(action.type)
  {
      case LOAD_TODOS:
          return [...action.payload.todos];

      default:
        return state;
  }
  
}

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

const rootReducer = combineReducers({
  todos,
  visibilityFilter
})

export default rootReducer;
