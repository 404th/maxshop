import { Switch, Route } from 'react-router-dom'
// Components
import Home from './Components/Home/home'
import Products from './Components/Products/products'
import Product from './Components/Product/product'
import ShoppingCart from './Components/ShoppingCart/shoppingCart'

function Layout () {

  return (
    <Switch>
      <Route exact path="/" component={ Home }/>
      <Route exact path="/products" component={ Products }/>
      <Route exact path="/products/:id" component={ Product }/>
      <Route exact path="/shopping" component={ ShoppingCart }/>
    </Switch>
  )
}

export default Layout