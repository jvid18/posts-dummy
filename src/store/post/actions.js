import { getAllPosts, getPostsByTag } from '../../services/posts'
import { POST_FILTERED, POST_INIT } from './types'

export const initPosts = () => {
  return async (dispatch) => {
    const data = await getAllPosts()

    dispatch({
      type: POST_INIT,
      payload: data,
    })
  }
}

export const filterPostsByTag = (tag) => {
  return async (dispatch) => {
    const data = await getPostsByTag(tag)

    dispatch({
      type: POST_FILTERED,
      payload: data,
    })
  }
}
