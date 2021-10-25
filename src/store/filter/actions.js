import { getAllTags } from '../../services/tags'
import { TAGS_INIT } from './types'

export const initTags = () => {
  return async (dispatch) => {
    const data = await getAllTags()

    dispatch({
      type: TAGS_INIT,
      payload: data,
    })
  }
}
