import { Switch, Route } from 'react-router-dom'
// Components
import Home from './Components/Home/home'
import Products from './Components/Products/products'
import Product from './Components/Product/product'

function Layout (props) {

  return (
    <Switch>
      <Route exact path="/" component={ Home }/>
      <Route exact path="/products" component={ Products }/>
      <Route exact path="/products/:id" component={ Product }/>
    </Switch>
  )
}

export default Layout