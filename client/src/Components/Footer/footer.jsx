import "./style/footerStyle.css"
import { Link } from 'react-router-dom'
import Ads from '../Ads/ads'

import { useContext } from 'react'
import { MyContext } from '../../GlobalState'

function Footer () {
  let year_footer = new Date().getFullYear()

  const { username, age } = useContext(MyContext)

  return (
    <div className="footer_container">
      <div className="footer_container_cover">
        <Ads />
        <div className="footer_container_cover_navigator">
          <div className="footer_container_cover_navigator_group">
            <div className="footer_container_cover_navigator_group_title">
              <span className="footer_container_cover_navigator_group_title_span">Customer Service</span>
            </div>
            <Link className="footer_container_cover_navigator_group_link no-drag" to="/">About us</Link>
            <Link className="footer_container_cover_navigator_group_link no-drag" to="/">Delivery Information</Link>
            <Link className="footer_container_cover_navigator_group_link no-drag" to="/">Privacy Policy</Link>
            <Link className="footer_container_cover_navigator_group_link no-drag" to="/">Terms & Policy</Link>
            <Link className="footer_container_cover_navigator_group_link no-drag" to="/">{ username }</Link>
            <Link className="footer_container_cover_navigator_group_link no-drag" to="/">{ age }</Link>
          </div>
          <div className="footer_container_cover_navigator_group">
            <div className="footer_container_cover_navigator_group_title">
              <span className="footer_container_cover_navigator_group_title_span">Customer Service</span>
            </div>
            <Link className="footer_container_cover_navigator_group_link no-drag" to="/">About us</Link>
            <Link className="footer_container_cover_navigator_group_link no-drag" to="/">Delivery Information</Link>
            <Link className="footer_container_cover_navigator_group_link no-drag" to="/">Privacy Policy</Link>
            <Link className="footer_container_cover_navigator_group_link no-drag" to="/">Terms & Policy</Link>
          </div>
          <div className="footer_container_cover_navigator_group">
            <div className="footer_container_cover_navigator_group_title">
              <span className="footer_container_cover_navigator_group_title_span">Customer Service</span>
            </div>
            <Link className="footer_container_cover_navigator_group_link no-drag" to="/">About us</Link>
            <Link className="footer_container_cover_navigator_group_link no-drag" to="/">Delivery Information</Link>
            <Link className="footer_container_cover_navigator_group_link no-drag" to="/">Delivery Information</Link>
            <Link className="footer_container_cover_navigator_group_link no-drag" to="/">Delivery Information</Link>
            <Link className="footer_container_cover_navigator_group_link no-drag" to="/">Delivery Information</Link>
            <Link className="footer_container_cover_navigator_group_link no-drag" to="/">Privacy Policy</Link>
            <Link className="footer_container_cover_navigator_group_link no-drag" to="/">Terms & Policy</Link>
          </div>
          <div className="footer_container_cover_navigator_group">
            <div className="footer_container_cover_navigator_group_title">
              <span className="footer_container_cover_navigator_group_title_span">Customer Service</span>
            </div>
            <Link className="footer_container_cover_navigator_group_link no-drag" to="/">About us</Link>
            <Link className="footer_container_cover_navigator_group_link no-drag" to="/">Delivery Information</Link>
            <Link className="footer_container_cover_navigator_group_link no-drag" to="/">Privacy Policy</Link>
            <Link className="footer_container_cover_navigator_group_link no-drag" to="/">Terms & Policy</Link>
          </div>
        </div>
        <div className="footer_container_cover_social">
          <span className="footer_container_cover_social_title no-select no-drag">&copy; { year_footer } Onecom Design, All right reserved!</span>
          <div className="footer_container_cover_social_icons">
            <Link to={"/"} className="fa fa-facebook no-select no-drag"></Link>
            <Link to={"/"} className="fa fa-twitter no-select no-drag"></Link>
            <Link to={"/"} className="fa fa-instagram no-select no-drag"></Link>
            <Link to={"/"} className="fa fa-linkedin no-select no-drag"></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer