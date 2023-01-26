import React from 'react'
import Navbar from '../navigation/navbar'

function Home({loggedIn, setLoggedIn}) {

  return (
    <>
    <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn}  />
    {
        loggedIn ?
        <div>You're Logged In!!</div> 
        : 
        <div>Sign in or sign up for a different message!</div>
    }
    </>
  )
}

export default Home