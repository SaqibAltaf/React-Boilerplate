import { Dispatch } from 'redux'

import { request } from './reducer'
export const getNews = () => {
  return async (dispatch: Dispatch) => {
    dispatch(request())
  }
}
