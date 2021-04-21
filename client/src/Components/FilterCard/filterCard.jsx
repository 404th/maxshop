import "./style/filterCardStyle.css"
import { Link } from 'react-router-dom'

function FilterCard ({ titleId, title, items }) {
  return (
    <div className="card">
      <div className="card-header class-card-header" id={`heading${ titleId }`}>
        <h5 className="mb-0">
          <button
            className="btn btn-link class-card-header-btn"
            data-toggle="collapse"
            data-target={`#collapse${ titleId }`}
            aria-expanded="true"
            aria-controls={`collapse${ titleId }`}
          >
            { title }
          </button>
        </h5>
      </div>

      <div
        id={`collapse${ titleId }`}
        className="collapse"
        aria-labelledby={`heading${titleId}`}
        data-parent="#itemAccordion"
      >
        <div className="card-body">
          {
            items.map( (item, i) => <li key={ i }>
              <Link className={"filter-items-title"} to="/">{ item }</Link>
            </li> )
          }
        </div>
      </div>
    </div>
  )
}

export default FilterCard