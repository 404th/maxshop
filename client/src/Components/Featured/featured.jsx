import "./style/featuredStyle.css"

import Card from '../Card/card'

import { defaultImageLink } from '../../store'

function Featured(){

  return (
    <div className="featured_container_cover">
      <div className="featured_container_cover_part_first featured_container_cover_part">
        <Card url={ defaultImageLink } />
        <Card url={ defaultImageLink } />
        <Card url={ defaultImageLink } />
        <Card url={ defaultImageLink } />
      </div>
      <div className="featured_container_cover_part_second featured_container_cover_part">
        <Card url={ defaultImageLink } />
        <Card url={ defaultImageLink } />
        <Card url={ defaultImageLink } />
        <Card url={ defaultImageLink } />
      </div>
      <div className="featured_container_cover_indicators">
        <button className="featured_container_cover_indicators_prev no-drag no-select">Prev</button>
        <button className="featured_container_cover_indicators_next no-drag no-select">Next</button>
      </div>
    </div>
  )
}

export default Featured