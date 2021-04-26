import { useState, useContext } from 'react'
import "./style/registerStyle.css"
import { Link } from 'react-router-dom'
import { MyContext } from '../../GlobalState'
import axios from 'axios'
import { serverURL } from '../../store'

function Register (props) {
  let { gSetCurrentUser, gSetIsVerified } = useContext( MyContext )
  let [ newUser, setNewUser ] = useState({
    username:"",
    email:"",
    password:"",
    confirm_password:""
  })

  const handleSetNewUser = props => {
    const { value, name } = props.target

    setNewUser({
      ...newUser,
      [name]: value
    })
  }

  const handleClearNewUser = () => {
    setNewUser({
      username:"",
      email:"",
      password:"",
      confirm_password:""
    })
  }

  const handleSendUserData = async () => {
    if ( newUser.confirm_password === newUser.password ) {
      // sending data to Server
      try {
        let cominData = await axios.post( `${ serverURL }/auth/register`, {
          username: newUser.username,
          email:newUser.email,
          password: newUser.password
        } )
        // check if data comin
        if ( cominData ){
          // set "true" if data come
          gSetIsVerified( true )
          // save current user as a global to use Front
          gSetCurrentUser( cominData.data.data )
          // change page url
          props.history.push("/")
          // clear inputs
          handleClearNewUser()
        } else {
          // clear current user if registering is failed
          gSetCurrentUser( {} )
          // set "false" if error occured
          gSetIsVerified( false )
        }
      } catch (err) {
        gSetCurrentUser( {} )
        // set "false" if data not come
        gSetIsVerified(false )
        // error
        if (err) {
          console.log( err )
        } else {
          console.error( "Data sent but response not come!" )
        }
      }
    } else {
      console.error("Confirmation has been failed!")
    }
  }

  return (
    <div className="register-container flex-centering-item">
      <div className="register-container-cover flex-centering-item">
        <div className="register-container-cover-form signup-form">
          <form>
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
                onClick={ () => handleSendUserData() }
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