import React, { useEffect, useState } from 'react'
import formatDate from 'date-fns/format'

import { getUserById } from '../../services/users'
import Modal from '../ui/Modal/Modal'

import './ModalProfile.css'

const ProfileModal = ({ match }) => {
  const { id } = match.params
  const [user, setUser] = useState({ isLoading: true })

  const prettyDate = (str) => {
    const date = new Date(str)
    return formatDate(date, 'MMM do y')
  }

  useEffect(() => {
    ;(async () => {
      const data = await getUserById(id)

      setUser((state) => ({
        ...state,
        ...data,
        isLoading: false,
      }))
    })()
  }, [id])

  if (user.isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <Modal
      title={`${user.firstName} ${user.lastName}`}
      style={{ maxWidth: '60rem' }}
    >
      {user.isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="profile">
          <div className="profile__content">
            <div className="profile__img-container">
              <img src={user.picture} alt="Alt" className="profile__img" />
            </div>
            <fieldset className="profile__section">
              <legend>Personal information</legend>
              <p className="profile__field">
                <span className="profile__field--title">Title</span>{' '}
                {user.title}
              </p>
              <p className="profile__field">
                <span className="profile__field--title">First name</span>{' '}
                {user.firstName}
              </p>
              <p className="profile__field">
                <span className="profile__field--title">Last name</span>{' '}
                {user.lastName}
              </p>
              <p className="profile__field">
                <span className="profile__field--title">Gender</span>{' '}
                {user.gender}
              </p>
            </fieldset>
            <fieldset className="profile__section">
              <legend>Contact information</legend>
              <p className="profile__field">
                <span className="profile__field--title">Street</span>{' '}
                {user.location.street}
              </p>
              <p className="profile__field">
                <span className="profile__field--title">City</span>{' '}
                {user.location.city}
              </p>
              <p className="profile__field">
                <span className="profile__field--title">State</span>{' '}
                {user.location.state}
              </p>
              <p className="profile__field">
                <span className="profile__field--title">Country</span>{' '}
                {user.location.country}
              </p>
              <p className="profile__field">
                <span className="profile__field--title">Phone</span>{' '}
                {user.phone}
              </p>
              <p className="profile__field">
                <span className="profile__field--title">Email</span>{' '}
                {user.email}
              </p>
            </fieldset>
            <fieldset className="profile__section">
              <legend>Account</legend>
              <p className="profile__field">
                <span className="profile__field--title">Register date</span>{' '}
                {prettyDate(user.registerDate)}
              </p>
              <p className="profile__field">
                <span className="profile__field--title">Updated date</span>{' '}
                {prettyDate(user.updatedDate)}
              </p>
            </fieldset>
          </div>
        </div>
      )}
    </Modal>
  )
}

export default ProfileModal
