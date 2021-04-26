import { createContext, useState } from 'react'
import axios from 'axios'
import { serverURL } from './store'

export const MyContext = createContext()

function GlobalState(props){

  const [ isVerified, setIsVerified ] = useState(false)
  const [ registerUser, setRegisterUser ] = useState(null)
  const [ currentUser, setCurrentUser ] = useState(null)

  const store = {
  gSetRegisterUser: async data => {
    let cominData = await axios.post( `${ serverURL }/auth/register`, { ...data } )
    setRegisterUser( cominData )
    // set user data for front
    setCurrentUser( cominData.data.data )
    // check if registered or not
    if ( cominData.data.data ){
      setIsVerified( true )
    } else {
      setIsVerified( false )
    }
    return cominData
  },
  gRegisterUser: registerUser,
  gLoginUser: () => {},
  gIsVerified: isVerified,
  gCurrentUser: currentUser

  }

  return (
    <MyContext.Provider value={ store }>
      { props.children }
    </MyContext.Provider>
  )
}

export default GlobalState