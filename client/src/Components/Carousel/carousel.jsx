import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import "./style/carouselStyle.css"

let images = [
  { aboutDiscount:"There is smth about discount.Lorem ipsum what uis up bordfhdfkj", url: "/img/3.jpg", alt:"for discount in home page carousel 3" },
  { aboutDiscount:"There is smth about discount.Lorem ipsum what uis up bordfhdfkj", url: "/img/4.jpg", alt:"for discount in home page carousel 4" },
  { aboutDiscount:"There is smth about discount.Lorem ipsum what uis up bordfhdfkj", url: "/img/5.jpg", alt:"for discount in home page carousel 5" },
  { aboutDiscount:"There is smth about discount.Lorem ipsum what uis up bordfhdfkj", url: "/img/7.jpg", alt:"for discount in home page carousel 7" },
  { aboutDiscount:"There is smth about discount.Lorem ipsum what uis up bordfhdfkj", url: "/img/8.jpg", alt:"for discount in home page carousel 8" },
  { aboutDiscount:"There is smth about discount.Lorem ipsum what uis up bordfhdfkj", url: "/img/9.jpg", alt:"for discount in home page carousel 9" },
  { aboutDiscount:"There is smth about discount.Lorem ipsum what uis up bordfhdfkj", url: "/img/10.jpg", alt:"for discount in home page carousel 10" },
  { aboutDiscount:"There is smth about discount.Lorem ipsum what uis up bordfhdfkj", url: "/img/11.jpg", alt:"for discount in home page carousel 11" },
  { aboutDiscount:"There is smth about discount.Lorem ipsum what uis up bordfhdfkj", url: "/img/13.jpg", alt:"for discount in home page carousel 13" },
]

function OurCarousel(){

  return (
    <Carousel
      autoPlay={ true }
      interval={ 2000 }
      autoFocus={ true }
      infiniteLoop={ true }
      showIndicators={ false }
      showThumbs={ false }
      className="carousel_itself"
    >
      {
        images.map( item => {
          return (
            <div className="carousel_item no-select no-drag" key={ item.url }>
              <img className="carousel_item_img" src={ item.url } alt={ item.alt } />
              <p className="legend">{ item.aboutDiscount }</p>
            </div>
          )
        } )
      }
    </Carousel>
  )
}

export default OurCarousel