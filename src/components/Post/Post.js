import React from 'react'
import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom'
import Tag from '../ui/Tag/Tag'

import HeartIcon from '../ui/HeartIcon/HeartIcon'
import User from '../ui/User/User'

import './Post.css'

const Post = ({ id, image, likes, tags, text, owner }) => {
  const location = useLocation()
  const fullName = `${owner.firstName} ${owner.lastName}`

  return (
    <article className="post">
      <div className="post__user">
        <User id={owner.id} name={fullName} picture={owner.picture} />
      </div>
      <div className="post__body">
        <div className="post__img-container">
          <img src={image} alt={text} loading="lazy" className="post__img" />
        </div>
        <div className="post__box">
          <div className="post__info">
            <div className="post__tags" aria-label="Post tags">
              {tags.map((tag) => (
                <Tag key={tag} name={tag} />
              ))}
            </div>
            <div className="post__description">{text}</div>
          </div>
          <div className="post__actions-container">
            <Link
              to={{
                pathname: `/post/${id}`,
                state: { background: location },
              }}
              className="post__action"
            >
              Comments
            </Link>
            <Link to="#" className="post__action">
              <HeartIcon className="post__action-icon post__action-icon--red" />
              <span className="post__action-text">{likes}</span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}

Post.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  text: PropTypes.string.isRequired,
  owner: PropTypes.shape({
    id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }),
}

export default Post
