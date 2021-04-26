import { useState } from 'react'
import "./style/loginStyle.css"

import { Link } from 'react-router-dom'

function Login () {

  const [ loginUser, setLoginUser ] = useState({
    email:"",
    password:""
  })

  const handleSetLoginUser = props => {
    const { name, value } = props.target

    setLoginUser({
      ...loginUser,
      [ name ]: value
    })
  }

  const handleClearLoginUser = () => {
    setLoginUser({
      email:"",
      password:""
    })
  }

  return (
    <div className="login-container flex-centering-item">
      <div className="login-container-cover flex-centering-item">
        <div className="register-container-cover-form signup-form">
          <form>
          <h2>Login</h2>
          <p className="hint-text">Log in to your atmosphere</p>
          <div className="form-group">
            </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email"
                  value={ loginUser.email }
                  autoComplete="off"
                  onChange={ e => handleSetLoginUser(e) }
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder="Password"
                  aria-autocomplete="list"
                  value={ loginUser.password }
                  onChange={ e => handleSetLoginUser(e) }
                />
              </div>
            <div className="form-group">
              <button
                className="btn btn-success btn-lg btn-block"
                type="button"
                // onClick={ handleClearLoginUser }
              >Login</button>
            </div>
            <div className="form-group">
              <button
                className="btn btn-outline-secondary btn-lg btn-block"
                type="button"
                onClick={ () => handleClearLoginUser() }
              >Clear</button>
            </div>
          </form>
          <div className="text-center">You have no account? <Link to="/register">Register here</Link></div>
        </div>
      </div>
    </div>
  )
}

export default Login