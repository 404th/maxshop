import { createContext } from 'react'

export const MyContext = createContext()

function GlobalState(props){

  const store = {
    username:"Hello",
    age:12,
    sendData: props => function(props){
    }
  }

  return (
    <MyContext.Provider value={ store }>
      { props.children }
    </MyContext.Provider>
  )
}

export default GlobalState