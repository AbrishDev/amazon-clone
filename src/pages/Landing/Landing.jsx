import React from 'react'
import LayOut from '../../components/LayOut/LayOut'
import Carousel from '../../components/Carousel/Carousel'
import Catagory from '../../components/Catagory/Catagory'
import Product from '../../components/Product/Product'


function Landing() {
  return (
    <LayOut>
      <Carousel />
      <Catagory />
      <Product />
    </LayOut>
  )
}

export default Landing