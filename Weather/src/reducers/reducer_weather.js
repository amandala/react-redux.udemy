import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
  switch(action.type) {
    case FETCH_WEATHER:
      return [ action.payload.data, ...state ] //immutable es6 sugar similar to concat
  }
  
  return state;
}