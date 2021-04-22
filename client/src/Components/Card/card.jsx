import "./style/cardStyle.css"
import { Link } from 'react-router-dom'

function Card({ id, url }){
  return (
    <div className="card_container">
      <div className="card_container_header">
        <img className="card_container_header_img no-select no-drag" src={ url } alt="Card container header"/>
      </div>
      <div className="card_container_footer">
        <p className="card_container_footer_price">$459.00</p>
        <p className="card_container_footer_name"> <Link to={ `/products/${ id }` }>Brown Wood Chair</Link> </p>
        <div className="card_container_footer_links flex-centering-item">
          <span  className="card_container_footer_links_span flex-centering-item">
            <img className="card_container_footer_links_span_img no-drag no-select" src="/img/basket.png" alt="liked item"/>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Card