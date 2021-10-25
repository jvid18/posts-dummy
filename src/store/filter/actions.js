import { getAllTags } from '../../services/tags'
import { TAGS_INIT, TAG_SET } from './types'

export const initTags = () => {
  return async (dispatch) => {
    const data = await getAllTags()

    dispatch({
      type: TAGS_INIT,
      payload: data,
    })
  }
}

export const setTag = (tag) => {
  return {
    type: TAG_SET,
    payload: tag,
  }
}
