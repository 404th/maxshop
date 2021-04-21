import "./style/filterStyle.css"

import FilterCard from '../FilterCard/filterCard'
import PriceRange from '../PriceRange/priceRange'

function Filter () {

  return (
    <>
      <div id="mainAccordion">
        <div className="card">
          <div className="card-header" id="filterButtonId">
            <h5 className="mb-0">
              <button className="class-main-filter-button btn btn-link" data-toggle="collapse" data-target="#filterCollapseButton" aria-expanded="true" aria-controls="filterCollapseButton">
                Filter by type
              </button>
            </h5>
          </div>

          <div id="filterCollapseButton" className="collapse show" aria-labelledby="filterButtonId" data-parent="#mainAccordion">
            <div className="card-body">
              <div id="itemAccordion">
                <FilterCard titleId={1} title="Watches" items={ [ "Royal", "Smart", "Next", "Era", "Travk" ] } />
                <FilterCard titleId={2} title="Jewellary" items={ [ "Kids & Babies", "Jackets", "Electronics", "Sports" ] } />
                <FilterCard titleId={3} title="Electronics" items={ [ "Kids & Babies", "Jackets", "Electronics", "Sports" ] } />
                <FilterCard titleId={4} title="Kids & Babies" items={ [ "Kids & Babies", "Jackets", "Electronics", "Sports" ] } />
                <FilterCard titleId={5} title="Technology" items={ [ "Kids & Babies", "Jackets", "Electronics", "Sports" ] } />
                <FilterCard titleId={6} title="Sports" items={ [ "Kids & Babies", "Jackets", "Electronics", "Sports" ] } />
                <FilterCard titleId={7} title="Bicycles" items={ [ "Kids & Babies", "Jackets", "Electronics", "Sports" ] } />
                <FilterCard titleId={8} title="Home & Garden" items={ [ "Kids & Babies", "Jackets", "Electronics", "Sports" ] } />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="mainAccordion2">
        <div className="card">
          <div className="card-header" id="filterPriceButtonId">
            <h5 className="mb-0">
              <button className="class-main-filter-button btn btn-link" data-toggle="collapse" data-target="#filterPriceCollapseButton" aria-expanded="true" aria-controls="filterPriceCollapseButton">
                Filter by price
              </button>
            </h5>
          </div>

          <div id="filterPriceCollapseButton" className="collapse show" aria-labelledby="filterPriceButtonId" data-parent="#mainAccordion2">
            <div className="card-body">
              <div id="priceAccordion">
                <div className="filter-price-container">
                  <div className="filter-price-container-cover">
                    <PriceRange />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Filter