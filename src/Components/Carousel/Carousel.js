import React, {useEffect, useState } from "react";
import "./Carousel.css";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function Carousel(props) {
  const images=props.images
  const [currImg, setCurrImg] = useState(0);

  useEffect(() => {
    let interval=undefined;
    if (props.autoplay){
      interval = setInterval(nextImage, props.autoplay);
    }
    return () => clearInterval(interval);
  }, [currImg]);

  const previousImage=()=>{
    currImg > 0 ? setCurrImg(currImg - 1) : setCurrImg(images.length-1);
  }
  const nextImage=()=>{
    currImg < images.length - 1 ? setCurrImg(currImg + 1) : setCurrImg(0);
  }
  

  return (
    <div className="carousel">
      <div
        className="carouselInner"
        style={{ backgroundImage: `url(${images[currImg].img})` }}
      >
      <div className="left">
        <ArrowBackIosIcon onClick={previousImage} style={{ fontSize: 30 }} />
      </div>
      
        
      <div className="center">
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
        {props.children}
      </div>

      <div className="right">
        <ArrowForwardIosIcon onClick={nextImage} style={{ fontSize: 30 }} />
      </div>

      

      </div>
    </div>
  );
}

export default Carousel;
