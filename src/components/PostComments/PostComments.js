import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { getCommentsByPostId } from '../../services/comments'
import Comment from '../ui/Comment/Comment'

import './PostComments.css'
import CommentLoader from '../ui/CommentLoader/CommentLoader'

const PostComments = ({ postId }) => {
  const [comments, setComments] = useState({
    data: [],
    isLoading: true,
  })

  useEffect(() => {
    ;(async () => {
      const { data } = await getCommentsByPostId(postId)

      setComments((state) => ({
        ...state,
        data: data,
        isLoading: false,
      }))
    })()
  }, [postId])

  if (comments.isLoading) {
    return <CommentLoader />
  }

  return (
    <div className="post-comments">
      {comments.data.length === 0 ? (
        <div className="post-comments__not-found">
          <p>There are no comments available for this post :(</p>
        </div>
      ) : (
        comments.data.map((comment) => {
          return <Comment key={comment.id} {...comment} />
        })
      )}
    </div>
  )
}

PostComments.propTypes = {
  postId: PropTypes.string.isRequired,
}

export default PostComments
