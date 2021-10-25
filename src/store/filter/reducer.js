import { TAGS_INIT } from './types'

const initialState = {
  tags: [],
  tagApplied: '',
}

export const filterReducer = (state = initialState, { type, payload }) => {
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

  const actions = {
    [TAGS_INIT]: init,
    default: () => state,
  }

  return (actions[type] && actions[type]()) || actions.default()
}
