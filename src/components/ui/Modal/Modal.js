import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

import './Modal.css'

const Modal = ({ children, title, onClose, style }) => {
  const history = useHistory()

  !onClose &&
    (onClose = () => {
      history.goBack()
    })

  useEffect(() => {
    const onEscKey = (evt) => {
      if (evt.keyCode !== 27) return
      onClose()
    }

    document.addEventListener('keydown', onEscKey, false)

    return () => {
      document.removeEventListener('keydown', onEscKey, false)
    }
  }, [onClose])

  return createPortal(
    <div className="modal modal--open">
      <div className="modal-content" style={style}>
        <div className="modal__header">
          <h3 className="modal__title">{title}</h3>
          <div className="modal__actions">
            <button className="modal__action" onClick={onClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="modal__action-icon"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="modal__body">{children}</div>
      </div>
    </div>,
    document.getElementById('modal-root')
  )
}

Modal.propTypes = {
  children: PropTypes.elementType,
  title: PropTypes.string,
  onClose: PropTypes.func,
  style: PropTypes.object,
}

export default Modal
