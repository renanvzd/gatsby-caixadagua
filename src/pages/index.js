import React from "react";
import "../components/home.css";
import Carousel from "../components/Carousel/carousel";
import { CardsHome } from "../components/grid";
import PageTemplate from "../components/pageTemplate";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <PageTemplate>
    <Carousel />
      <div className="main">
        <span> Conheça as opções que temos para você: </span>
        
        <div className="container1">
          {CardsHome.map((item, index) => {
            return(
                    <div key={index}className="container3">
                  <Link to={item.path}>
                    <img src={item.imageCard} alt="Pé Grande1" />
                      <p className="title1">{item.titleCards}</p>
                      <p className="subtitle2">{item.subTitleCards}</p>
                      <p className="knowMore3">{item.knowMore}</p>
                  </Link>
                    </div>
              )
          })}
        </div>

      </div> 
    </PageTemplate>
);
}

export default IndexPage;


