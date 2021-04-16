import "./style/footerStyle.css"
import { Link } from 'react-router-dom'


function Footer () {
  let year_footer = new Date().getFullYear()

  return (
    <div className="footer_container">
      <div className="footer_container_cover">
        <div className="footer_container_cover_ad">
          <img className="footer_container_cover_ad_img no-select no-drag" src="./img/food.png" alt="Delivering service" height="80px"/>
          <p className="footer_container_cover_ad_p truncate">
            <span className="footer_container_cover_ad_p_span">FREE SHIPPING </span>
              offered by ONECOM - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, dignissimos!
          </p>
          <Link className="footer_container_cover_ad_p_link no-select no-drag flex-centering-item" to="/">LEARN MORE</Link>
        </div>
        <div className="footer_container_cover_navigator">
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
          <span className="footer_container_cover_social_title">&copy; { year_footer } Onecom Design, All right reserved!</span>
          <div className="footer_container_cover_social_icons">
            <Link to={"/"} className="fa fa-facebook"></Link>
            <Link to={"/"} className="fa fa-twitter"></Link>
            <Link to={"/"} className="fa fa-instagram"></Link>
            <Link to={"/"} className="fa fa-linkedin"></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer