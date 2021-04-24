import { Switch, Route } from 'react-router-dom'
// Components
import Home from './Components/Home/home'
import Products from './Components/Products/products'
import Product from './Components/Product/product'
import ShoppingCart from './Components/ShoppingCart/shoppingCart'
import Stores from './Components/Stores/stores'
import Profile from './Components/Profile/profile'

function Layout () {

  return (
    <Switch>
      <Route exact path="/" component={ Home }/>
      <Route exact path="/products" component={ Products }/>
      <Route exact path="/products/:id" component={ Product }/>
      <Route exact path="/shopping" component={ ShoppingCart }/>
      <Route exact path="/stores" component={ Stores }/>
      <Route exact path="/profile" component={ Profile }/>
    </Switch>
  )
}

export default Layout