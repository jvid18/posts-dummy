import { useAuth0 } from '@auth0/auth0-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import './Header.css'

const Header = ({ user }) => {
  const { logout } = useAuth0()
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => setShowMenu((value) => !value)

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="brand">
          TitaChallenge
        </Link>

        <nav className="user-nav">
          <div className="user-nav__user">
            <div className="user-nav__visible" onClick={toggleMenu}>
              <img
                src={user.picture}
                alt={user.name}
                className="user-nav__user-photo"
              />
              <span className="user-nav__user-name">{user.name}</span>
            </div>

            <div className={`user__slide ${showMenu ? 'is-active' : ''}`}>
              <ul className="user__actions">
                <li className="user__action"></li>
                <li className="user__action-item">
                  <button
                    className="user__logout"
                    onClick={() => {
                      logout({ returnTo: window.location.origin })
                    }}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  user: PropTypes.shape({
    picture: PropTypes.string.isRequired,
    name: PropTypes.string,
  }),
}

export default Header
