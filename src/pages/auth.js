import React from 'react'
import axios from 'axios'
import { useState } from 'react'

export const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState();

  
  const handleFormSubmit = (e) => {
    e.preventDefault();

    axios({
      method: 'post',
      url: 'https://blog-api-gql.herokuapp.com/users',
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      data: { 
        user: {
          email: email,
          password: password,
          confirm_password: confirmPassword
        }
      }
    }).then(
      res => {
        console.log(res)
        setConfirmPassword("")
        setEmail("")
        setPassword("")
      }
      )
      .catch(
        error => { 
          console.log(error.errors)
          setError(error.errors)
        }
      )
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-group">
        <label>Email address</label>
        <input type="email" className="form-control" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
      </div>

      <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)}/>
      </div>

      <button type="submit" className="btn btn-primary mt-3">Submit</button>
      <p>
        {error}
      </p>
    </form>
  );
}

export const LogIn = () => {
  const [stat, setStat] = useState(false)

  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setCredentials({...credentials, [name]: value })
  }

  const signIn = () => {
    var config = {
      method: 'post',
      url: 'https://blog-api-gql.herokuapp.com//users/sign_in',
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      data: { user: credentials }
    }

    axios(config)
    .then(res => {
      setStat(true)
      console.log(JSON.stringify(res.headers))
    })
    .catch(error => {
      console.error(JSON.stringify(error))
    })
  }

  const handleLogin = (e) => {
    e.preventDefault();
    signIn()
  }

  if (stat) return 'logged in'

  return (
    <form onSubmit={handleLogin}>
      <div className="form-group">
        <label>Email address</label>
        <input 
          name="email"
          type="email"
          className="form-control"
          placeholder="Enter email"
          onChange={(e) => handleChange(e) }
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input 
          name="password" 
          type="password" 
          className="form-control" 
          placeholder="Password" 
          onChange={(e) => handleChange(e) }
        />
      </div>
      <button type="submit" className="btn btn-primary mt-3">Submit</button>  
    </form>
  );
}
