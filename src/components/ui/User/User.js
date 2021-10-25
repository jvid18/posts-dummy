import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

import './User.css'

const User = ({ id, name, picture, background }) => {
  const location = useLocation()

  return (
    <div className="user">
      <div className="user__img-container">
        <img src={picture} alt={name} loading="lazy" className="user__img" />
      </div>
      <Link
        to={{
          pathname: `/profile/${id}`,
          state: { background: background || location },
        }}
        className="user__name"
      >
        {name}
      </Link>
    </div>
  )
}

User.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}

export default User
