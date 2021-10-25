import { POST_FILTERED, POST_INIT, POST_LOADING } from './types'

const initialState = {
  data: [],
  page: 0,
  limit: 20,
  isLoading: true,
}

export const postReducer = (state = initialState, { type, payload }) => {
  const loading = () => ({
    ...state,
    isLoading: true,
  })

  const init = () => {
    const { page, limit, data } = payload

    return {
      ...state,
      data,
      page,
      limit,
      isLoading: false,
    }
  }

  const filtered = () => {
    const { page, limit, data } = payload

    return {
      ...state,
      data,
      page,
      limit,
      isLoading: false,
    }
  }

  const actions = {
    [POST_LOADING]: loading,
    [POST_INIT]: init,
    [POST_FILTERED]: filtered,
    default: () => state,
  }

  return (actions[type] && actions[type]()) || actions.default()
}
