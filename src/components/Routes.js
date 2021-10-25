import React from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'

import Home from '../pages/Home/Home'
import ModalPost from './ModalPost/ModalPost'
import ModalProfile from './ModalProfile/ModalProfile'
import NotFound from '../pages/NotFound/NotFound'
import ProtectedRoute from './ProtectedRoute'
import Login from '../pages/Login/Login'

const Routes = () => {
  const location = useLocation()
  const background = location.state && location.state.background

  return (
    <>
      <Switch location={background || location}>
        <Route path="/login" component={Login} />
        <ProtectedRoute path="/" exact component={Home} />
        <ProtectedRoute path="/post/:id" component={ModalPost} />
        <ProtectedRoute path="/profile/:id" component={ModalProfile} />

        <Route component={NotFound} />
      </Switch>
      <Switch>
        {background && (
          <ProtectedRoute path="/post/:id" component={ModalPost} />
        )}
        {background && (
          <ProtectedRoute path="/profile/:id" component={ModalProfile} />
        )}
      </Switch>
    </>
  )
}

export default Routes
