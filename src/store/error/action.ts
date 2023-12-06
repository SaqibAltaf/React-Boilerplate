import { Dispatch } from 'redux'

import { resetError, setError } from './reducer'

export const setErrorAction = (object: { message: string }) => {
  return async (dispatch: Dispatch) => {
    dispatch(setError(object))
  }
}
export const resetErrorAction = () => {
  return async (dispatch: Dispatch) => {
    dispatch(resetError())
  }
}
