import "./style/adsStyle.css"
import { Link } from 'react-router-dom'

function Ads() {
  return (
    <div className="footer_container_cover_ad">
      <img className="footer_container_cover_ad_img no-select no-drag" src="/img/food.png" alt="Delivering service" height="80px"/>
      <p className="footer_container_cover_ad_p truncate">
        <span className="footer_container_cover_ad_p_span">FREE SHIPPING </span>
          offered by ONECOM - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, dignissimos!
      </p>
      <Link className="footer_container_cover_ad_p_link no-select no-drag flex-centering-item" to="/">LEARN MORE</Link>
    </div>
  )
}

export default Ads
