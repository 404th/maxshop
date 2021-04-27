import { useState, useEffect } from 'react'
import "./style/registerStyle.css"
import { Link } from 'react-router-dom'
// import { MyContext } from '../../GlobalState'
// import axios from 'axios'
import { serverURL } from '../../store'
import { useAxios } from '../../useAxios'

function Register (props) {
  // let { gSetCurrentUser, gSetIsVerified } = useContext( MyContext )
  const [ loading, setLoading ] = useState( false )
  const { handleContactServer } = useAxios()

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

  const [ registerErrors, setRegisterErrors ] = useState({
    username:"",
    email:"",
    password:"",
    confirm_password:""
  })

  useEffect( () => {
    console.log( registerErrors )
  }, [ registerErrors ] )

  const handleSendDataClick = async () => {
    if ( newUser.password === newUser.confirm_password ) {
      let cominData = await handleContactServer(
        "POST",
        `${ serverURL }/auth/register`,
        {
          username: newUser.username,
          email: newUser.email,
          password: newUser.password
        },
        props,
        "/login",
        setLoading,
        handleClearNewUser
      )
      console.log( cominData )
      console.log( cominData.errors.length )
      // check for errors
      if ( cominData.errors.length < 1 ){
        console.log( cominData.data )
      } else {
        // set errors
        cominData.errors.map( err => {
          setRegisterErrors({
            ...registerErrors,
            [ err.param ]: err.msg
          })
          // clear errors after 5s
          setTimeout( () =>  setRegisterErrors({
            username:"",
            email:"",
            password:"",
            confirm_password:""
          }), 5000 )
          return 0
        } )
      }
      
    } else {
      setRegisterErrors({
        ...registerErrors,
        confirm_password:"Password is not matched!"
      })
      // clear errors after 5s
      setTimeout( () =>  setRegisterErrors({
        username:"",
        email:"",
        password:"",
        confirm_password:""
      }), 5000 )
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
                  className={`form-control ${ registerErrors.username !== "" ? "is-invalid" : "" } `}
                  autoComplete="off"
                  type="text"
                  name="username"
                  placeholder="Username"
                  disabled={ loading }
                  value={ newUser.username }
                  onChange={ e => handleSetNewUser(e) }
                />
                <div className="invalid-feedback">
                  { registerErrors.username }
                </div>
              </div>
              <div className="form-group">
                <input
                  className={`form-control ${ registerErrors.email !== "" ? "is-invalid" : "" } `}
                  autoComplete="off"
                  type="email"
                  name="email"
                  placeholder="Email"
                  disabled={ loading }
                  value={ newUser.email }
                  onChange={ e => handleSetNewUser(e) }
                />
                <div className="invalid-feedback">
                  { registerErrors.email }
                </div>
              </div>
              <div className="form-group">
                <input
                  className={`form-control ${ registerErrors.password !== "" ? "is-invalid" : "" } `}
                  autoComplete="off"
                  type="password"
                  name="password"
                  placeholder="Password"
                  disabled={ loading }
                  aria-autocomplete="list"
                  value={ newUser.password }
                  onChange={ e => handleSetNewUser(e) }
                />
                <div className="invalid-feedback">
                  { registerErrors.password }
                </div>
              </div>
              <div className="form-group">
                <input
                  className={`form-control ${ registerErrors.confirm_password !== "" ? "is-invalid" : "" } `}
                  autoComplete="off"
                  type="password"
                  name="confirm_password"
                  placeholder="Confirm Password"
                  disabled={ loading }
                  value={ newUser.confirm_password }
                  onChange={ e => handleSetNewUser(e) }
                  />
                  <div className="invalid-feedback">
                    { registerErrors.confirm_password }
                  </div>
              </div>
            <div className="form-group">
              <button
                className="btn btn-success btn-lg btn-block"
                type="button"
                onClick={ () => handleSendDataClick() }
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