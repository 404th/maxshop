import { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import Loading from './Components/Loading/loading'
import { MyContext } from './GlobalState'
import { serverURL } from './store'

function Auth ( Component ) {

  const { gIsVerified, gSetIsVerified } = useContext(MyContext)
  let bearerToken = localStorage.getItem("bearerToken")

  if ( bearerToken?.length > 7 ){
    axios.get( `${ serverURL }/auth/check`, { headers:{ "bearerToken": bearerToken } } )
      .then( data => {
        setTimeout( () => { gSetIsVerified( data.data.isChecked ) }, 1 )
      } )
      .catch ( err => {
        gSetIsVerified( err.data.isChecked )
      } )

  }

  return gIsVerified ?
    <Component />
      :
    ( bearerToken ? <Loading /> : <Redirect to="/login" /> )

}

export default Auth