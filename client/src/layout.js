import { Switch, Route, Redirect } from 'react-router-dom'
// Components
import Home from './Components/Home/home'
import Products from './Components/Products/products'
import Product from './Components/Product/product'
import ShoppingCart from './Components/ShoppingCart/shoppingCart'
import Stores from './Components/Stores/stores'
import Profile from './Components/Profile/profile'
import Login from './Components/Login/login'
import Register from './Components/Register/register'

import Auth from './auth'

import Navbar from './Components/Navbar/navbar'
import Footer from './Components/Footer/footer'

function Layout () {

  return (
    <Switch>
      <Route exact path="/register" component={ Register }/>
      <Route exact path="/login" component={ Login }/>
      <div>
        {/* { isAuth && <Navbar /> } */}
        <Navbar />
        <Route exact path="/" component={ () => Auth(Home) }/>
        <Route exact path="/products" component={ () => Auth(Products) }/>
        <Route exact path="/products/:id" component={ () => Auth(Product) }/>
        <Route exact path="/shopping" component={ () => Auth(ShoppingCart) }/>
        <Route exact path="/stores" component={ () => Auth(Stores) }/>
        <Route exact path="/profile" component={ () => Auth(Profile) }/>
        {/* { isAuth && <Footer /> } */}
        <Footer />
        <Redirect to="/login" />
      </div>
    </Switch>
  )
}

export default Layout