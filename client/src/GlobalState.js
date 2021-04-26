import { createContext, useState } from 'react'
// import axios from 'axios'
// import { serverURL } from './store'

export const MyContext = createContext()

function GlobalState(props){

  const [ isVerified, setIsVerified ] = useState(false)
  const [ currentUser, setCurrentUser ] = useState({})

  const store = {
    // is logged or not
    gSetIsVerified: is => setIsVerified(is),
    gIsVerified: isVerified,
    // save current user info
    gSetCurrentUser: data => setCurrentUser(data),
    gCurrentUser: currentUser
  }

  return (
    <MyContext.Provider value={ store }>
      { props.children }
    </MyContext.Provider>
  )
}

export default GlobalState