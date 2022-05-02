import React, { useContext, useState } from 'react'
import "../CSS/Signup.css"
import firebase from "firebase/compat/app"


import UserContext from "../Context/UserContext"
import { Navigate } from 'react-router-dom'
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
toast.configure()



const Signup = () => {
  const { user, setUser } = useContext(UserContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSingup = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password).then((res) => {
      console.log(res)
      toast.success("SuccessFully Signed Up", {autoClose:500, position:"top-center"})
      setUser({ email: res.user.email, uid: res.user.uid })
    }).catch((error) => {
      console.log(error)
      toast.error(error.message, { autoClose: 5000, position: "top-center" })
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    handleSingup()
  }
  if (user?.email) {
    return <Navigate to="/" />

  }
  else {

    return (
      <>
        <h2 className='text-center'>Sign Up Page </h2>
        <div className='main-container'>
          <div className="sub-container">
            <label htmlFor="Email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} id='e' name='Email' type="email" placeholder='Type your email here' />
            <label htmlFor="Password">Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Type your password here' name="Password" id="p" />
            <button onClick={handleSubmit} id='btn' className='btn btn-primary m-2'>Sign Up</button>
          </div>
        </div>
      </>
    )
  }
}

export default Signup