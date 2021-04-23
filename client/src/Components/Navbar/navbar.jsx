import { Link } from 'react-router-dom'
import "./style/navbarStyle.css"

function Navbar () {
  return (
    <div className="navbar_container">
      <div className="navbar_container_cover">
        <div className="navbar_container_cover_brand flex-centering-item">
          <Link className="navbar_container_cover_brand_link no-select no-drag flex-centering-item" to="/">
            <img
              className="navbar_container_cover_brand_link_img no-select no-drag"
              src="/img/family.png"
              alt="brand of the site"
            />
          </Link>
        </div>
        <div className="navbar_container_cover_search flex-centering-item">
          <input
            className="navbar_container_cover_search_input"
            type="search"
            name="search-item"
            id="search-item"
            placeholder="Type to search..."
          />
        </div>
        <div className="navbar_container_cover_basket">
          <Link to="/shopping" className="navbar_container_cover_basket_link">
            <img
              className="navbar_container_cover_basket_link_img no-select no-drag"
              src="/img/basket.png"
              alt="shopping cart"
              height="35px"
            />
          </Link>
          <div className="navbar_container_cover_basket_summarize">
            <span className="navbar_container_cover_basket_summarize_span">
              0 item(s) - $0.00
            </span>
          </div>
        </div>
      </div>
      <div className="navbar_container_cover2">
        <Link className="navbar_container_cover2_link flex-centering-item no-drag" to="/products">Products</Link>
        <Link className="navbar_container_cover2_link flex-centering-item no-drag" to="/">Information</Link>
        <Link className="navbar_container_cover2_link flex-centering-item no-drag" to="/">Profile</Link>
        <Link className="navbar_container_cover2_link flex-centering-item no-drag" to="/shopping">Basket</Link>
        <Link className="navbar_container_cover2_link flex-centering-item no-drag" to="/">Contributors</Link>
        <Link className="navbar_container_cover2_link flex-centering-item no-drag" to="/">Stores</Link>
        <Link className="navbar_container_cover2_link flex-centering-item no-drag" to="/">Contact us</Link>
        <Link className="navbar_container_cover2_link flex-centering-item no-drag" to="/">How to...</Link>
      </div>
    </div>
  )
}

export default Navbar