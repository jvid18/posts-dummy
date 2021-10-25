import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { initPosts } from '../../store/post/actions'
import Post from '../Post/Post'
import PostLoader from '../ui/PostLoader/PostLoader'

import './Posts.css'

const Posts = () => {
  const posts = useSelector(({ posts }) => posts)
  const dispatch = useDispatch()

  useEffect(() => {
    ;(() => {
      dispatch(initPosts())
    })()
  }, [dispatch])

  return (
    <section className="posts">
      {posts.isLoading
        ? [...new Array(10)].map((_, i) => <PostLoader key={i} />)
        : posts.data.map((post) => <Post key={post.id} {...post} />)}
    </section>
  )
}

export default Posts
