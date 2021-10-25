import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

import './Login.css'

const Login = () => {
  const { loginWithRedirect } = useAuth0()
  return (
    <div className="wrapper">
      <main className="main">
        <h1 className="main__title">
          Hello, this is a Post App build with react
        </h1>
        <p>
          To see the posts it is necessary that you log in, you do not need to
          create an account :)
        </p>
        <div className="login__container">
          <button onClick={loginWithRedirect} className="login__button">
            Login
          </button>
        </div>
      </main>
    </div>
  )
}

export default Login
