import React, { useContext } from 'react'
import "../CSS/NavBar.css"
import { Link } from 'react-router-dom'

// Importing react icons
import { FaUser, FaGithub, FaArrowCircleDown, FaArrowAltCircleUp } from "react-icons/fa"
import UserContext from '../Context/UserContext'


const NavBar = () => {
  const { user, setUser } = useContext(UserContext)
  return (
    <div className='nav-bar'>
      <div className="left">
        <span>
          Github User App
          
        </span>
        <span>
          <FaUser /> {user?.email ? user.email : ""}
        </span>
      </div>
      <div className="mid"><FaGithub size={40} /></div>
      <div className="right">
        <span><Link to="/signin">{user?.email ? "" : "Sign In"}</Link></span>
        <span><Link onClick={() => setUser(null)} to="/signup">{user?.email ? "Log Out" : "Sign Up"}</Link></span>
      </div>
    </div>
  )
}

export default NavBar