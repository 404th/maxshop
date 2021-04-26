import { useContext } from 'react'
import { Redirect } from 'react-router-dom'

import { MyContext } from './GlobalState'

function Auth ( Component ) {

  const { gIsVerified } = useContext(MyContext)

  console.log( gIsVerified )

  return (
    gIsVerified ? <Component /> : <Redirect to="/login" />
  )
}

export default Auth