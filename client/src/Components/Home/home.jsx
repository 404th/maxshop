import "./style/homeStyle.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import OurCarousel from '../Carousel/carousel'
import { Link } from 'react-router-dom'

import Featured from '../Featured/featured'

import { defaultImageLink } from '../../store'

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
              <img className="home_container_cover_ads_35_cover_img" src={ defaultImageLink } alt="Summer discount"/>
            </div>
          </div>
          <div className="home_container_cover_ads_25">
            <div className="home_container_cover_ads_25_cover ads_div_background no-drag no-select">
              <div className="ads_div_background_hover">
                <p className="ads_div_background_hover_per">25%</p>
                <p className="ads_div_background_hover_title">discount</p>
                <Link className="ads_div_background_hover_link no-select no-drag" to="/">Get it now!</Link>
              </div>
              <img className="home_container_cover_ads_25_cover_img" src={ defaultImageLink } alt="Autumn discount"/>
            </div>
          </div>
        </div>
        <div className="home_container_cover_title home_container_cover_title_featured"></div>
        <div className="home_container_cover_products">
          <Featured />
        </div>
        <div className="home_container_cover_title home_container_cover_title_brands"></div>
        <div className="home_container_cover_brands">
          <div className="home_container_cover_brands_brand home_container_cover_brands_brand_1">
            <div className="home_container_cover_brands_brand_div">
              <img src={ defaultImageLink } alt="commercial brand 1"/>
            </div>
            <div className="home_container_cover_brands_brand_div">
              <img src={ defaultImageLink } alt="commercial brand 2"/>
            </div>
          </div>
          <div className="home_container_cover_brands_brand home_container_cover_brands_brand_2">
            <div className="home_container_cover_brands_brand_div">
              <img src={ defaultImageLink } alt="commercial brand 3"/>
            </div>
            <div className="home_container_cover_brands_brand_div">
              <img src={ defaultImageLink } alt="commercial brand 4"/>
            </div>
          </div>
          <div className="home_container_cover_brands_brand home_container_cover_brands_brand_3">
            <div className="home_container_cover_brands_brand_div">
              <img src={ defaultImageLink } alt="commercial brand 5"/>
            </div>
            <div className="home_container_cover_brands_brand_div">
              <img src={ defaultImageLink } alt="commercial brand 6"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home