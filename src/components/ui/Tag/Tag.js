import React from 'react'
import './Tag.css'

const Tag = ({ name }) => {
  return (
    <div className="tag">
      <p className="tag__text">{name}</p>
    </div>
  )
}

export default Tag
