import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initTags, setTag } from '../../store/filter/actions'
import { filterPostsByTag, initPosts } from '../../store/post/actions'

import './PostFilter.css'

const PostFilter = () => {
  const [tag, setTagState] = useState('')
  const { data: tags, tagApplied } = useSelector(({ filter }) => filter)
  const dispatch = useDispatch()

  const handleSubmit = (evt) => {
    evt.preventDefault()

    if (tag.trim() === tagApplied || !tag.trim()) return

    if (tags.indexOf(tag) !== -1) {
      dispatch(setTag(tag))
      dispatch(filterPostsByTag(tag))
    } else {
      alert('Tag not found')
    }
  }

  const handleClear = () => {
    setTagState('')
    dispatch(setTag(''))
    dispatch(initPosts())
  }

  const handleChange = ({ target }) => setTagState(target.value)

  useEffect(() => {
    ;(() => {
      dispatch(initTags())
    })()
  }, [dispatch])

  return (
    <section className="filter">
      <div className="filter-content">
        <div className="filter__header">
          <h2 className="filter__title">Filter</h2>
        </div>
        <div className="filter__buttons">
          <button onClick={handleClear} className="filter__clear-btn">
            Clear
          </button>
        </div>
        <form onSubmit={handleSubmit} className="filter-form">
          <label htmlFor="tag-input" className="filter__label">
            <span className="filter__text">By tag</span>
            <div className="filter__box">
              <input
                type="text"
                id="tag-input"
                list="tag-list"
                className="filter__input"
                placeholder="Type some..."
                onChange={handleChange}
                value={tag}
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
