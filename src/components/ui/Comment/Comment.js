import React from 'react'
import PropTypes from 'prop-types'
import formatDistance from 'date-fns/formatDistance'

import User from '../User/User'

import './Comment.css'

const Comment = ({ message, owner, publishDate }) => {
  const fullName = `${owner.firstName} ${owner.lastName}`
  const date = formatDistance(new Date(publishDate), new Date())

  return (
    <div className="comment">
      <User id={owner.id} name={fullName} picture={owner.picture} />
      <div className="comment__body">
        <p className="comment__text">{message}</p>
        <p className="comment__date">{date}</p>
      </div>
    </div>
  )
}

Comment.propTypes = {
  message: PropTypes.string.isRequired,
  owner: PropTypes.object.isRequired,
  publishDate: PropTypes.string.isRequired,
}

export default Comment
