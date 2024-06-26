import React from 'react'
import "./ProfileConnectBtn.css"
import { Link } from 'react-router-dom'

const ProfileConnectBtn = () => {
  return (
    <div className="connection-wrapper align-items-center justify-content-start d-flex border w-75 mt-5">
        <div className="ask-expert">
            <Link to="/askform" className='btn btn-primary-dark' herf="" >Ask To Expert</Link>
        </div>
        <div className="book-now ms-5">
            <a className='btn btn-primary-dark' href="" >Book Now</a>
        </div>
    </div>
  )
}

export default ProfileConnectBtn