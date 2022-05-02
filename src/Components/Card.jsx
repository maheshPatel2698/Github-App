import React from 'react'
import "../CSS/Card.css"

const Card = ({newUser}) => {
  return (
    <div className='main-card'>
        <div className="img-class">
        <img className='user' src={newUser?.avatar_url} alt="User" />
        </div>
        <div className="right-class">
            <span>Public Repos: {newUser?.public_repos} </span>
            <span>Created On:{newUser?.created_at} </span>
        </div>
    </div>
  )
}

export default Card