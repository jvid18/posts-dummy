import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  initPosts,
  loadMorePosts,
  loadMorePostsByTag,
} from '../../store/post/actions'
import Post from '../Post/Post'
import PostLoader from '../ui/PostLoader/PostLoader'

import './Posts.css'

const Posts = () => {
  const posts = useSelector(({ posts }) => posts)
  const tagApplied = useSelector(({ filter }) => filter.tagApplied)
  const dispatch = useDispatch()

  const loadMore = () => {
    if (!tagApplied) {
      dispatch(loadMorePosts(posts.page + 1))
    } else {
      dispatch(loadMorePostsByTag(tagApplied, posts.page + 1))
    }
  }

  useEffect(() => {
    ;(() => {
      dispatch(initPosts())
    })()
  }, [dispatch])

  return (
    <section className="posts">
      <div className="posts__grid">
        {posts.isLoading
          ? [...new Array(4)].map((_, i) => <PostLoader key={i} />)
          : posts.data.map((post) => <Post key={post.id} {...post} />)}
      </div>
      <div className="posts__footer">
        <div className="posts__footer-loading">
          {posts.isLoadingMore && (
            <p className="posts__footer-loading-text">Loading...</p>
          )}
        </div>
        <div className="posts__actions">
          {!posts.isLoading && (
            <button className="posts__more" onClick={loadMore}>
              Load more
            </button>
          )}
        </div>
      </div>
    </section>
  )
}

export default Posts
