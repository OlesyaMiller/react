//this is just a presentational component. "dumb"
import React from 'react';
import { Link } from 'react-router-dom';

import Login from './Login'

const Home = () => {
  return(
    <div className="home">
      <div className="home">
        <h1> Welcome to Book-Notes </h1>
        <h3> Login or Signup Below : </h3>
        < Login />
        Dont have an account?<Link to=''>Sign Up!</Link>
      </div>
    </div>
  )
}

export default Home
