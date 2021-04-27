import axios from 'axios'

export function useAxios () {

  async function handleContactServer( method, url, data, props, changedUrl,  setLoading, handleClearNewUser ){
    console.log("Clicked!")
    try {
      // set loading on
      setLoading( true )
      // send data
      let cominData = await axios({ url, method, data })
      //
      if ( cominData ) {
        // change page location
        props.history.push( changedUrl )
        return cominData.data
      } else {
        return {
          data:{},
          errors:[
            {
              value: "Request sent but data was not came",
              msg: "Request sent but data was not came",
              location: "client/useAxios.js",
              param: "axios"
            }
          ]
        }
      }
    } catch (err) {
      return err.response.data
    } finally {
      // set loading off
      setLoading( false )
      // clear inputs
      handleClearNewUser()
      console.log( "useAxios is completed work" )
    }
  }
  return { handleContactServer }
}