import "./style/shoppingCartStyle.css"
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import { Link } from 'react-router-dom'

function ShoppingCart() {
  return (
    <div className="shopping-cart-container">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th className="th-in-shopping-cart th-in-shopping-cart_img" scope="col">IMAGE</th>
            <th className="th-in-shopping-cart" scope="col">PRODUCT NAME</th>
            <th className="th-in-shopping-cart" scope="col">QUANTITY</th>
            <th className="th-in-shopping-cart" scope="col">PRICE</th>
            <th className="th-in-shopping-cart" scope="col">TOTAL</th>
            <th className="th-in-shopping-cart" scope="col">ACTION</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="td-in-shopping-cart shopping-cart-img flex-centering-item">
              <img className="shopping-cart-img_img no-select no-drag" src="/img/1.jpg" alt="shopping cart i" />
            </td>
            <td className="td-in-shopping-cart shopping-cart-name">
              <span className="shopping-cart-name_span">Black lined cookie</span>
            </td>
            <td className="td-in-shopping-cart shopping-cart-quantity">
              <div className="shopping-cart-quantity_div">
                <button className="shopping-cart-quantity_div_button">-</button>
                <span className="shopping-cart-quantity_div_span">23</span>
                <button className="shopping-cart-quantity_div_button">+</button>
              </div>
            </td>
            <td className="td-in-shopping-cart shopping-cart-price">
              <span className="shopping-cart-price_span">$455.00</span>
            </td>
            <td className="td-in-shopping-cart shopping-cart-total">
              <span className="shopping-cart-total_span">$2434.00</span>
            </td>
            <td className="td-in-shopping-cart shopping-cart-action">
              <HighlightOffIcon className="shopping-cart-action_delete" />
            </td>
          </tr>
          <tr>
            <td className="td-in-shopping-cart shopping-cart-img flex-centering-item">
              <img className="shopping-cart-img_img no-select no-drag" src="/img/1.jpg" alt="shopping cart i" />
            </td>
            <td className="td-in-shopping-cart shopping-cart-name">
              <span className="shopping-cart-name_span">Black lined cookie</span>
            </td>
            <td className="td-in-shopping-cart shopping-cart-quantity">
              <div className="shopping-cart-quantity_div">
                <button className="shopping-cart-quantity_div_button">-</button>
                <span className="shopping-cart-quantity_div_span">23</span>
                <button className="shopping-cart-quantity_div_button">+</button>
              </div>
            </td>
            <td className="td-in-shopping-cart shopping-cart-price">
              <span className="shopping-cart-price_span">$455.00</span>
            </td>
            <td className="td-in-shopping-cart shopping-cart-total">
              <span className="shopping-cart-total_span">$2434.00</span>
            </td>
            <td className="td-in-shopping-cart shopping-cart-action">
              <HighlightOffIcon className="shopping-cart-action_delete" />
            </td>
          </tr>
          <tr>
            <td className="td-in-shopping-cart shopping-cart-img flex-centering-item">
              <img className="shopping-cart-img_img no-select no-drag" src="/img/1.jpg" alt="shopping cart i" />
            </td>
            <td className="td-in-shopping-cart shopping-cart-name">
              <span className="shopping-cart-name_span">Black lined cookie</span>
            </td>
            <td className="td-in-shopping-cart shopping-cart-quantity">
              <div className="shopping-cart-quantity_div">
                <button className="shopping-cart-quantity_div_button">-</button>
                <span className="shopping-cart-quantity_div_span">23</span>
                <button className="shopping-cart-quantity_div_button">+</button>
              </div>
            </td>
            <td className="td-in-shopping-cart shopping-cart-price">
              <span className="shopping-cart-price_span">$455.00</span>
            </td>
            <td className="td-in-shopping-cart shopping-cart-total">
              <span className="shopping-cart-total_span">$2434.00</span>
            </td>
            <td className="td-in-shopping-cart shopping-cart-action">
              <HighlightOffIcon className="shopping-cart-action_delete" />
            </td>
          </tr>
          <tr>
            <td className="td-in-shopping-cart shopping-cart-img flex-centering-item">
              <img className="shopping-cart-img_img no-select no-drag" src="/img/1.jpg" alt="shopping cart i" />
            </td>
            <td className="td-in-shopping-cart shopping-cart-name">
              <span className="shopping-cart-name_span">Black lined cookie</span>
            </td>
            <td className="td-in-shopping-cart shopping-cart-quantity">
              <div className="shopping-cart-quantity_div">
                <button className="shopping-cart-quantity_div_button">-</button>
                <span className="shopping-cart-quantity_div_span">23</span>
                <button className="shopping-cart-quantity_div_button">+</button>
              </div>
            </td>
            <td className="td-in-shopping-cart shopping-cart-price">
              <span className="shopping-cart-price_span">$455.00</span>
            </td>
            <td className="td-in-shopping-cart shopping-cart-total">
              <span className="shopping-cart-total_span">$2434.00</span>
            </td>
            <td className="td-in-shopping-cart shopping-cart-action">
              <HighlightOffIcon className="shopping-cart-action_delete" />
            </td>
          </tr>
          <tr>
            <td className="td-in-shopping-cart shopping-cart-img flex-centering-item">
              <img className="shopping-cart-img_img no-select no-drag" src="/img/1.jpg" alt="shopping cart i" />
            </td>
            <td className="td-in-shopping-cart shopping-cart-name">
              <span className="shopping-cart-name_span">Black lined cookie</span>
            </td>
            <td className="td-in-shopping-cart shopping-cart-quantity">
              <div className="shopping-cart-quantity_div">
                <button className="shopping-cart-quantity_div_button">-</button>
                <span className="shopping-cart-quantity_div_span">23</span>
                <button className="shopping-cart-quantity_div_button">+</button>
              </div>
            </td>
            <td className="td-in-shopping-cart shopping-cart-price">
              <span className="shopping-cart-price_span">$455.00</span>
            </td>
            <td className="td-in-shopping-cart shopping-cart-total">
              <span className="shopping-cart-total_span">$2434.00</span>
            </td>
            <td className="td-in-shopping-cart shopping-cart-action">
              <HighlightOffIcon className="shopping-cart-action_delete" />
            </td>
          </tr>
          <tr>
            <td className="td-in-shopping-cart shopping-cart-img flex-centering-item">
              <img className="shopping-cart-img_img no-select no-drag" src="/img/1.jpg" alt="shopping cart i" />
            </td>
            <td className="td-in-shopping-cart shopping-cart-name">
              <span className="shopping-cart-name_span">Black lined cookie</span>
            </td>
            <td className="td-in-shopping-cart shopping-cart-quantity">
              <div className="shopping-cart-quantity_div">
                <button className="shopping-cart-quantity_div_button">-</button>
                <span className="shopping-cart-quantity_div_span">23</span>
                <button className="shopping-cart-quantity_div_button">+</button>
              </div>
            </td>
            <td className="td-in-shopping-cart shopping-cart-price">
              <span className="shopping-cart-price_span">$455.00</span>
            </td>
            <td className="td-in-shopping-cart shopping-cart-total">
              <span className="shopping-cart-total_span">$2434.00</span>
            </td>
            <td className="td-in-shopping-cart shopping-cart-action">
              <HighlightOffIcon className="shopping-cart-action_delete" />
            </td>
          </tr>
          <tr>
            <td className="td-in-shopping-cart shopping-cart-img flex-centering-item">
              <img className="shopping-cart-img_img no-select no-drag" src="/img/1.jpg" alt="shopping cart i" />
            </td>
            <td className="td-in-shopping-cart shopping-cart-name">
              <span className="shopping-cart-name_span">Black lined cookie</span>
            </td>
            <td className="td-in-shopping-cart shopping-cart-quantity">
              <div className="shopping-cart-quantity_div">
                <button className="shopping-cart-quantity_div_button">-</button>
                <span className="shopping-cart-quantity_div_span">23</span>
                <button className="shopping-cart-quantity_div_button">+</button>
              </div>
            </td>
            <td className="td-in-shopping-cart shopping-cart-price">
              <span className="shopping-cart-price_span">$455.00</span>
            </td>
            <td className="td-in-shopping-cart shopping-cart-total">
              <span className="shopping-cart-total_span">$2434.00</span>
            </td>
            <td className="td-in-shopping-cart shopping-cart-action">
              <HighlightOffIcon className="shopping-cart-action_delete" />
            </td>
          </tr>
          <tr>
            <td className="td-in-shopping-cart shopping-cart-img flex-centering-item">
              <img className="shopping-cart-img_img no-select no-drag" src="/img/1.jpg" alt="shopping cart i" />
            </td>
            <td className="td-in-shopping-cart shopping-cart-name">
              <span className="shopping-cart-name_span">Black lined cookie</span>
            </td>
            <td className="td-in-shopping-cart shopping-cart-quantity">
              <div className="shopping-cart-quantity_div">
                <button className="shopping-cart-quantity_div_button">-</button>
                <span className="shopping-cart-quantity_div_span">23</span>
                <button className="shopping-cart-quantity_div_button">+</button>
              </div>
            </td>
            <td className="td-in-shopping-cart shopping-cart-price">
              <span className="shopping-cart-price_span">$455.00</span>
            </td>
            <td className="td-in-shopping-cart shopping-cart-total">
              <span className="shopping-cart-total_span">$2434.00</span>
            </td>
            <td className="td-in-shopping-cart shopping-cart-action">
              <HighlightOffIcon className="shopping-cart-action_delete" />
            </td>
          </tr>
          <tr>
            <td className="td-in-shopping-cart shopping-cart-img flex-centering-item">
              <img className="shopping-cart-img_img no-select no-drag" src="/img/1.jpg" alt="shopping cart i" />
            </td>
            <td className="td-in-shopping-cart shopping-cart-name">
              <span className="shopping-cart-name_span">Black lined cookie</span>
            </td>
            <td className="td-in-shopping-cart shopping-cart-quantity">
              <div className="shopping-cart-quantity_div">
                <button className="shopping-cart-quantity_div_button">-</button>
                <span className="shopping-cart-quantity_div_span">23</span>
                <button className="shopping-cart-quantity_div_button">+</button>
              </div>
            </td>
            <td className="td-in-shopping-cart shopping-cart-price">
              <span className="shopping-cart-price_span">$455.00</span>
            </td>
            <td className="td-in-shopping-cart shopping-cart-total">
              <span className="shopping-cart-total_span">$2434.00</span>
            </td>
            <td className="td-in-shopping-cart shopping-cart-action">
              <HighlightOffIcon className="shopping-cart-action_delete" />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="shopping-cart-container_buttons">
        <Link className="shopping-cart-container_buttons_continue no-select" to="/">Continue shopping</Link>
        <Link className="shopping-cart-container_buttons_clear no-select" to="/">Clear cart</Link>
      </div>
    </div>
  )
}

export default ShoppingCart
