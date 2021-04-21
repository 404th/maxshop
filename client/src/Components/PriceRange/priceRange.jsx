import React from 'react'

import "./style/priceRangeStyle.css"
import "react-input-range/lib/css/index.css"

import { makeStyles } from '@material-ui/core/styles'
import Slider from '@material-ui/core/Slider'

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
})

function PriceRange(){

  const classes = useStyles();
  const [priceRange, setPriceRange] = React.useState([0, 1000])

  const handleSetRange = (event, newValue) => {
    setPriceRange(newValue)
  }

  return (
    <>
      <div className={ classes.root }>
        <Slider
          className="price-ranger"
          value={ priceRange }
          onChange={ handleSetRange }
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          max={ 1000 }
          min={ 0 }
        />
      </div>
    </>
  )
}

export default PriceRange