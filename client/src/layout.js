import { Switch, Route } from 'react-router-dom'
// Components
import Home from './Components/Home/home'

function Layout () {
  return (
    <Switch>
      <Route path="/" component={ Home }/>
    </Switch>
  )
}

export default Layout