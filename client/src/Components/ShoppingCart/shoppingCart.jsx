import "./style/shoppingCartStyle.css"

function ShoppingCart() {
  return (
    <div className="shopping-cart-container">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">IMAGE</th>
            <th scope="col">PRODUCT NAME</th>
            <th scope="col">QUANTITY</th>
            <th scope="col">PRICE</th>
            <th scope="col">TOTAL</th>
            <th scope="col">ACTION</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="shopping-cart-img"> 1</td>
            <td className="shopping-cart-name">Mark</td>
            <td className="shopping-cart-quantity">Otto</td>
            <td className="shopping-cart-price">Otto</td>
            <td className="shopping-cart-total">Otto</td>
            <td className="shopping-cart-action">@mdo</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ShoppingCart
