import {
  POST_FILTERED,
  POST_INIT,
  POST_LOADING,
  POST_LOADING_MORE,
  POST_LOAD_MORE,
} from './types'

const initialState = {
  data: [],
  page: 0,
  limit: 20,
  isLoading: true,
  isLoadingMore: false,
}

export const postReducer = (state = initialState, { type, payload }) => {
  const loading = () => ({
    ...state,
    isLoading: true,
  })

  const loadData = () => {
    const { page, limit, data } = payload

    return {
      ...state,
      data,
      page,
      limit,
      isLoading: false,
    }
  }

  const loadingMore = () => ({
    ...state,
    isLoadingMore: true,
  })

  const loadMore = () => {
    const { page, limit, data } = payload

    return {
      ...state,
      data: [].concat(state.data, data),
      page,
      limit,
      isLoadingMore: false,
    }
  }

  const actions = {
    [POST_LOADING]: loading,
    [POST_INIT]: loadData,
    [POST_FILTERED]: loadData,
    [POST_LOADING_MORE]: loadingMore,
    [POST_LOAD_MORE]: loadMore,
    default: () => state,
  }

  return (actions[type] && actions[type]()) || actions.default()
}
