import "./style/productsStyle.css"
import Ads from '../Ads/ads'
import Card from '../Card/card'
import Filter from '../Filter/filter'

import { defaultImageLink } from '../../store'

function Products(){
  return (
    <div className="products_container">
      <div className="products_container_cover">
        {/* <div className="products_container_cover_ad"></div> */}
        <Ads />
        <div className="products_container_cover_products">
          <div className="products_container_cover_products_items">
            <Card id={ 1234567891 } url={ defaultImageLink } />
            <Card id={ 1234567892 } url={ defaultImageLink } />
            <Card id={ 1234567893 } url={ defaultImageLink } />
            <Card id={ 1234567894 } url={ defaultImageLink } />
            <Card id={ 1234567895 } url={ defaultImageLink } />
            <Card id={ 1234567896 } url={ defaultImageLink } />
            <Card id={ 1234567897 } url={ defaultImageLink } />
            <Card id={ 1234567898 } url={ defaultImageLink } />
            <Card id={ 1234567899 } url={ defaultImageLink } />
            <Card id={ 12345678910 } url={ defaultImageLink } />
            <div className="featured_container_cover_indicators">
              <button className="featured_container_cover_indicators_prev no-drag no-select">Prev</button>
              <button className="featured_container_cover_indicators_next no-drag no-select">Next</button>
            </div>
          </div>
          <div className="products_container_cover_products_filter">
            <Filter />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products