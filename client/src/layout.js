import { Switch, Route } from 'react-router-dom'
// Components
import Home from './Components/Home/home'
import Products from './Components/Products/products'

function Layout (props) {

  return (
    <Switch>
      <Route exact path="/" component={ Home }/>
      <Route exact path="/products" component={ Products }/>
    </Switch>
  )
}

export default Layout