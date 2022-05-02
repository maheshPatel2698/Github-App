import React, { useContext, useState } from 'react'
import Card from './Card'
import Repos from './Repos'
import UserContext from "../Context/UserContext"
import "../CSS/Home.css"
import axios from 'axios'
import { Navigate } from 'react-router-dom'

const Home = () => {
  const { user } = useContext(UserContext)
  const [newUser, setNewuser] = useState(null)
  const [query, setQuery] = useState("")

  const fetchUser = async () => {
    try {
      const { data } = await axios(`https://api.github.com/users/${query}`)
    
      setNewuser(data)
      setQuery("")
    } catch (error) {
      console.log(error)
    }

  }
  if (user?.email) {
    return (
      <>
        <div className="searchbar">
          <input id='s'
            type="text"
            placeholder='Search User Here'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={() => fetchUser()} className='btn btn-primary'>Fetch User </button>
        </div>
        {newUser ? <Card newUser={newUser} /> : null}
        {newUser ? <Repos reposUrl={newUser.repos_url} /> : null}

      </>
    )
  }
  else {
    return <Navigate to="/signup" />
  }

}

export default Home