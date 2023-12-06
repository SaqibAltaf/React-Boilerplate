import { combineReducers } from 'redux'

import { reducer as error } from './error/reducer'
import { reducer as news } from './news/reducer'

const reducers = {
  error,
  news
}

export const appReducer = combineReducers(reducers)
