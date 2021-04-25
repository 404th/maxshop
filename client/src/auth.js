import { Redirect } from 'react-router-dom'

import { isAuth } from './store'

function Auth ( Component ) {

  return (
    isAuth ? <Component /> : <Redirect to="/login" />
  )
}

export default Auth