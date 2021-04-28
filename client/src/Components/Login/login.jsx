import { useState, useEffect, useContext } from 'react'
import "./style/loginStyle.css"

import { Link } from 'react-router-dom'
import { useAxios } from '../../useAxios'
import { serverURL } from '../../store'
import { MyContext } from '../../GlobalState'

function Login (props) {
  const { handleContactServer } = useAxios()
  const [ loading, setLoading ] = useState( false )
  const [ loginUser, setLoginUser ] = useState({
    email:"",
    password:""
  })
  const { gSetIsVerified, gSetCurrentUser, gIsVerified } = useContext( MyContext )

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
  // errors
  const [ loginErrors, setLoginErrors ] = useState({
    email:"",
    password:""
  })

  const handleSendLoginData = async () => {
    const cominData = await handleContactServer(
      "POST",
      `${ serverURL }/auth/login`,
      loginUser,
      props,
      "/",
      setLoading,
      handleClearLoginUser
    )
  
    // check for errors
    if ( cominData.errors.length < 1 ){
      console.log( cominData.data )
      // after login set user as a verified
      gSetIsVerified( true )
      // change url
      props.history.push( "/" )
      // after login set user's data as a global
      gSetCurrentUser( cominData.data.value )
    } else {
      //
      cominData.errors.map( err => {
        setLoginErrors({
          ...loginErrors,
          [ err.param ]: err.msg
        })
        return 0
      } )
      // clear errors after 5s
      setTimeout( () => {
        setLoginErrors({
          email:"",
          password:""
        })
      }, 5000 )
    }
  }

  useEffect( () => {
    console.log( loginErrors )
    console.log( gIsVerified )
  }, [ loginErrors, gIsVerified ] )

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
                  className={`form-control ${ loginErrors.email !== "" ? "is-invalid" : "" } `}
                  name="email"
                  placeholder="Email"
                  value={ loginUser.email }
                  autoComplete="off"
                  disabled={ loading }
                  onChange={ e => handleSetLoginUser(e) }
                />
                <div className="invalid-feedback">
                  { loginErrors.email }
                </div>
              </div>
              <div className="form-group">
                <input
                  className={`form-control ${ loginErrors.password !== "" ? "is-invalid" : "" } `}
                  type="password"
                  name="password"
                  placeholder="Password"
                  aria-autocomplete="list"
                  value={ loginUser.password }
                  disabled={ loading }
                  onChange={ e => handleSetLoginUser(e) }
                />
                <div className="invalid-feedback">
                  { loginErrors.password }
                </div>
              </div>
            <div className="form-group">
              <button
                className="btn btn-success btn-lg btn-block"
                type="button"
                onClick={ () => handleSendLoginData() }
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