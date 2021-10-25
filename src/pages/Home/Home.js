import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

import Header from '../../components/ui/Header/Header'
import PostFilter from '../../components/PostFilter/PostFilter'
import Posts from '../../components/Posts/Posts'

import './Home.css'

const Home = () => {
  const { user } = useAuth0()
  return (
    <div className="container">
      <Header user={user} />
      <PostFilter />
      <Posts />
    </div>
  )
}

export default Home
