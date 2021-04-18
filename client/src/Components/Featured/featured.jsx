import "./style/featuredStyle.css"

import Card from '../Card/card'

function Featured(){
  return (
    <div className="featured_container_cover">
      <div className="featured_container_cover_part_first featured_container_cover_part">
        <Card url="./img/7.jpg" />
        <Card url="./img/9.jpg" />
        <Card url="./img/3.jpg" />
        <Card url="./img/4.jpg" />
      </div>
      <div className="featured_container_cover_part_second featured_container_cover_part">
        <Card url="./img/5.jpg" />
        <Card url="./img/9.jpg" />
        <Card url="./img/7.jpg" />
        <Card url="./img/8.jpg" />
      </div>
    </div>
  )
}

export default Featured