import { combineReducers } from 'redux'

import requestCityReducer from './requestCityReducer'
import addCityReducer from './addCityReducer'

const rootReducer = combineReducers({
  appStatus: requestCityReducer,
  cityArray: addCityReducer
})

export default rootReducer;
