import React from 'react'
import Carousel from './Carousel/Carousel';

import City from "../Images/city.jpg";
import Salvador from "../Images/salvador.jpg";
import Ubc from "../Images/ubc.jpg";


export default function CarouselContainer() {
    const images = [
        {
            img: City
        },
        {
          img: Salvador,
        },
        {
          img: Ubc,
        },
      ];


    return (
        <Carousel 
        title="Carousel title"
        subtitle="Carousel subtitle" 
        images={images} 
        autoplay={3000}
        >
            
        <button style={{height:"30px",width:"200px"}} >Start</button>
      </Carousel>
    )
}
