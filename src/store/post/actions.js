import { getAllPosts, getPostsByTag } from '../../services/posts'
import { POST_FILTERED, POST_INIT, POST_LOADING } from './types'

export const initPosts = () => {
  return async (dispatch) => {
    dispatch({
      type: POST_LOADING,
    })

    const data = await getAllPosts()

    dispatch({
      type: POST_INIT,
      payload: data,
    })
  }
}

export const filterPostsByTag = (tag) => {
  return async (dispatch) => {
    dispatch({
      type: POST_LOADING,
    })

    const data = await getPostsByTag(tag)

    dispatch({
      type: POST_FILTERED,
      payload: data,
    })
  }
}
