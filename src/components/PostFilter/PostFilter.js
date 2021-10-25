import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initTags } from '../../store/filter/actions'
import { filterPostsByTag } from '../../store/post/actions'

import './PostFilter.css'

const PostFilter = () => {
  const [tag, setTag] = useState('')
  const tags = useSelector(({ filter }) => filter.data)
  const dispatch = useDispatch()

  const handleSubmit = (evt) => {
    evt.preventDefault()

    if (tags.indexOf(tag) === -1) {
      alert('Invalid tag')
      return
    }

    if (!tag.trim()) {
      dispatch(initTags())
    } else {
      dispatch(filterPostsByTag(tag))
    }
  }

  const handleChange = ({ target }) => setTag(target.value)

  useEffect(() => {
    ;(() => {
      dispatch(initTags())
    })()
  }, [dispatch])

  return (
    <section className="filter">
      <div className="filter-content">
        <h2 className="filter__title">Filter</h2>
        <form onSubmit={handleSubmit} className="filter-form">
          <label htmlFor="tag-input" className="filter__label">
            <span className="filter__text">Search by tag</span>
            <div className="filter__box">
              <input
                type="text"
                id="tag-input"
                list="tag-list"
                className="filter__input"
                placeholder="Type some..."
                onChange={handleChange}
              />
              <button className="filter__btn">Search</button>
            </div>
          </label>
          <datalist id="tag-list">
            {tags && tags.map((tag) => <option key={tag}>{tag}</option>)}
          </datalist>
        </form>
      </div>
    </section>
  )
}

export default PostFilter
