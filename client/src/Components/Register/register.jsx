import { useState } from 'react'
import "./style/registerStyle.css"
import { Link } from 'react-router-dom'

function Register () {

  let [ newUser, setNewUser ] = useState({
    username:"",
    email:"",
    password:"",
    confirm_password:""
  })

  const handleSetNewUser = props => {
    const { value, name } = props.target
    console.log( newUser )

    setNewUser({
      ...newUser,
      [name]: value
    })
  }

  const handleClearNewUser = () => {
    console.log( newUser )

    setNewUser({
      username:"",
      email:"",
      password:"",
      confirm_password:""
    })
  }

  return (
    <div className="register-container flex-centering-item">
      <div className="register-container-cover flex-centering-item">
        <div className="register-container-cover-form signup-form">
          <form action="/examples/actions/confirmation.php" method="post">
          <h2>Register</h2>
          <p className="hint-text no-select no-drag">Create your account. It's free and only takes a minute.</p>
          <div className="form-group">
            </div>
              <div className="form-group">
                <input
                  className="form-control"
                  autoComplete="off"
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={ newUser.username }
                  onChange={ e => handleSetNewUser(e) }
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  autoComplete="off"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={ newUser.email }
                  onChange={ e => handleSetNewUser(e) }
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  autoComplete="off"
                  type="password"
                  name="password"
                  placeholder="Password"
                  aria-autocomplete="list"
                  value={ newUser.password }
                  onChange={ e => handleSetNewUser(e) }
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  autoComplete="off"
                  type="password"
                  name="confirm_password"
                  placeholder="Confirm Password"
                  required="required"
                  value={ newUser.confirm_password }
                  onChange={ e => handleSetNewUser(e) }
                />
              </div>
            <div className="form-group">
              <button
                className="btn btn-success btn-lg btn-block"
                type="button"
              >Register Now</button>
              <button
                className="btn btn-outline-secondary btn-lg btn-block"
                type="button"
                onClick={ () => handleClearNewUser() }
              >Clear</button>
            </div>
          </form>
          <div className="text-center">Already have an account? <Link to="/login">Login</Link></div>
        </div>
      </div>
    </div>
  )
}

export default Register