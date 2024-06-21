import React from 'react'
import Navbar from '../components/Navbar'
import Dashboard from '../components/Dashboard'
import From from '../components/From'

const Home = () => {
  return (
    <div>
        <Navbar login = {<From/>}/>
        <Dashboard/>
    </div>
  )
}

export default Home
