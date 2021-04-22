import "./style/productStyle.css"
// import { useParams } from "react-router-dom"
import Ads from '../Ads/ads'
import Filter from '../Filter/filter'

function Product () {

  // const { id } = useParams()

  return (
    <div className="product_container">
      <div className="product_container_cover">
        <Ads />
        <div className='product_container_cover_prod'>
          <div className="product_container_cover_prod_itself">
            <div className="product_container_cover_prod_itself_img">
              <div className="product_container_cover_prod_itself_img_cover flex-centering-item">
                <img
                  className="product_container_cover_prod_itself_img_cover_img"
                  src="/img/1.jpg"
                  alt="About this product"
                />
              </div>
            </div>
            <div className="product_container_cover_prod_itself_about">
              <h3 className="product_container_cover_prod_itself_about_title">Brown Wood Chair</h3>
              <span className="product_container_cover_prod_itself_about_price">$345.00</span>
              <p className="product_container_cover_prod_itself_about_text">Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit maxime nobis repellendus molestias nemo! Consequatur eius reprehenderit reiciendis vel magni itaque molestiae non sapiente quasi, fuga iste hic autem tempore officiis cum voluptates qui praesentium quam eveniet explicabo nisi. Amet, cum mollitia numquam aperiam ratione et veniam maiores blanditiis quos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos id sunt, aut deserunt quis architecto optio totam quam, officia delectus, placeat exercitationem impedit. Architecto repellendus, libero laborum in, soluta nulla nostrum aut modi officia quidem provident ut expedita nisi delectus ducimus. Aspernatur, placeat sed deserunt id incidunt sapiente reprehenderit asperiores eius harum quaerat! Corporis iusto voluptatibus maiores dicta commodi, assumenda consectetur aspernatur totam et harum alias iure porro placeat at officia quaerat amet magni saepe, eligendi quo eveniet hic, aliquid quas recusandae. Unde officiis reprehenderit numquam eum reiciendis? Numquam vitae delectus excepturi soluta rem. Id inventore labore est sequi. ipsum dolor, sit amet consectetur adipisicing elit. Commodi veritatis ex, autem unde aliquid voluptas! Voluptatem beatae eligendi alias atque temporibus nobis, nesciunt sequi rerum quam quisquam laborum voluptatum consectetur.</p>              
              <button className="product_container_cover_prod_itself_about_button no-select no-drag">Add to basket</button>
            </div>
          </div>
          <div className="product_container_cover_prod_filter">
            <Filter />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product