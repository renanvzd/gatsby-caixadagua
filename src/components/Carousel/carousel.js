import React from "react";
import { Carousel } from "react-responsive-carousel";
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner1.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carousel.css";


const DemoCarousel = ({}) => {
  return (
    <div className="container">
      <Carousel autoPlay infiniteLoop transitionTime="1000" interval="4000" >
        <div className="containerCarousel">
          <img alt="" src={banner1} />
          {/* <p className="legend dub">Legend 1</p> */}
        </div>
        <div className="containerCarousel">
          <img alt="" src={banner2} />
          {/* <p className="legend dub">Legend 2</p> */}
        </div>
    </Carousel>
    </div>
  )};

export default DemoCarousel;
