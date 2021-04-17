import "./style/homeStyle.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OurCarousel from '../Carousel/carousel'
import { Link } from 'react-router-dom'

function Home () {

  return (
    <div className="home_container">
      <div className="home_container_cover">
        <div className="home_container_cover_ads">
          <div className="home_container_cover_ads_50">
            <div className="home_container_cover_ads_50_cover">
              <OurCarousel />
            </div>
          </div>
          <div className="home_container_cover_ads_35">
            <div className="home_container_cover_ads_35_cover ads_div_background no-drag no-select">
              <div className="ads_div_background_hover">
                <p className="ads_div_background_hover_per">35%</p>
                <p className="ads_div_background_hover_title">discount</p>
                <Link className="ads_div_background_hover_link no-select no-drag" to="/">Get it now!</Link>
              </div>
              <img className="home_container_cover_ads_35_cover_img" src="./img/8.jpg" alt="Summer discount"/>
            </div>
          </div>
          <div className="home_container_cover_ads_25">
            <div className="home_container_cover_ads_25_cover ads_div_background no-drag no-select">
              <div className="ads_div_background_hover">
                <p className="ads_div_background_hover_per">25%</p>
                <p className="ads_div_background_hover_title">discount</p>
                <Link className="ads_div_background_hover_link no-select no-drag" to="/">Get it now!</Link>
              </div>
              <img className="home_container_cover_ads_25_cover_img" src="./img/10.jpg" alt="Autumn discount"/>
            </div>
          </div>
        </div>
        <div className="home_container_cover_products"></div>
        <div className="home_container_cover_brands"></div>
      </div>
    </div>
  )
}

export default Home