import { getAllPosts, getPostsByTag } from '../../services/posts'
import { POST_FILTERED, POST_INIT, POST_LOADING, POST_LOAD_MORE } from './types'

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

export const loadMorePosts = (page) => {
  return async (dispatch) => {
    const data = await getAllPosts({
      params: {
        page,
      },
    })

    dispatch({
      type: POST_LOAD_MORE,
      payload: data,
    })
  }
}

export const loadMorePostsByTag = (tag, page) => {
  return async (dispatch) => {
    dispatch({
      type: POST_LOAD_MORE,
    })

    const data = await getPostsByTag(tag, {
      params: {
        page,
      },
    })

    dispatch({
      type: POST_LOAD_MORE,
      payload: data,
    })
  }
}
