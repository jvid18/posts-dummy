import React from 'react'
import PropTypes from 'prop-types'

import './Tag.css'

const Tag = ({ name }) => {
  return (
    <div className="tag">
      <p className="tag__text">{name}</p>
    </div>
  )
}

Tag.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Tag
