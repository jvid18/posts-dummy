import { TAGS_INIT, TAG_SET } from './types'

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

  const setTag = () => {
    return {
      ...state,
      tagApplied: payload,
    }
  }

  const actions = {
    [TAGS_INIT]: init,
    [TAG_SET]: setTag,
    default: () => state,
  }

  return (actions[type] && actions[type]()) || actions.default()
}
