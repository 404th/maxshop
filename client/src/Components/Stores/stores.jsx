import "./style/storesStyle.css"

import { Link } from 'react-router-dom'

import { defaultImageLink } from '../../store'

function Stores () {
  return (
    <div className="stores-container">
      <div className="stores-container-cover bs-example" data-example-id="list-group-custom-content">
        <div className="list-group">
          <Link className="stores-item list-group-item" to="/stores">
            <img className="stores-brand-image media-object" width="50px" height="50px" src={ defaultImageLink } alt="45 343" />
            <h4 className="list-group-item-heading">List group item heading</h4>
            <p className="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
          </Link>
          <Link className="stores-item list-group-item" to="/stores">
            <img className="stores-brand-image media-object" width="50px" height="50px" src={ defaultImageLink } alt="45 343" />
            <h4 className="list-group-item-heading">List group item heading</h4>
            <p className="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
          </Link>
          <Link className="stores-item list-group-item" to="/stores">
            <img className="stores-brand-image media-object" width="50px" height="50px" src={ defaultImageLink } alt="45 343" />
            <h4 className="list-group-item-heading">List group item heading</h4>
            <p className="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
          </Link>
          <Link className="stores-item list-group-item" to="/stores">
            <img className="stores-brand-image media-object" width="50px" height="50px" src={ defaultImageLink } alt="45 343" />
            <h4 className="list-group-item-heading">List group item heading</h4>
            <p className="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
          </Link>
          <Link className="stores-item list-group-item" to="/stores">
            <img className="stores-brand-image media-object" width="50px" height="50px" src={ defaultImageLink } alt="45 343" />
            <h4 className="list-group-item-heading">List group item heading</h4>
            <p className="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
          </Link>
          <Link className="stores-item list-group-item" to="/stores">
            <img className="stores-brand-image media-object" width="50px" height="50px" src={ defaultImageLink } alt="45 343" />
            <h4 className="list-group-item-heading">List group item heading</h4>
            <p className="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
          </Link>
          <Link className="stores-item list-group-item" to="/stores">
            <img className="stores-brand-image media-object" width="50px" height="50px" src={ defaultImageLink } alt="45 343" />
            <h4 className="list-group-item-heading">List group item heading</h4>
            <p className="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Stores