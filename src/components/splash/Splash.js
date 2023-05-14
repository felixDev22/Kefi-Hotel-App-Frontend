import React from 'react'
import Style from './splach.css'
export default function Splash() {
  return (
      <div className = 'container'>
          <div className = 'splash'>
            <h1> Welcome to <br/> <span>KeFi</span></h1>
          </div>
          <div className='btns'>
            <button className="btn login btn-primary btn-rounded mx-5 px-5">Login</button>
            <button className="btn signup btn-primary btn-rounded mx-5 px-5">Sign Up</button>
          </div>
      </div>
  )
}
