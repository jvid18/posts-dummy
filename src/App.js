import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { BrowserRouter as Router } from 'react-router-dom'

import Loading from './components/ui/Loading/Loading'
import Routes from './components/Routes'

function App() {
  const { isLoading } = useAuth0()

  if (isLoading) {
    return <Loading />
  }

  return (
    <Router>
      <Routes />
    </Router>
  )
}

export default App
