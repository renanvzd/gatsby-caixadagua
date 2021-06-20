import React from "react";
import "../components/home.css";
import Carousel from "../components/Carousel/carousel";
import { CardsHome } from "../components/grid";
import { Servicos } from "../components/grid4";
import PageTemplate from "../components/pageTemplate";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <PageTemplate>
    <Carousel />
      <div className="main">
        <div className="container1">
          {CardsHome.map((item, index) => {
            return(
                    <div key={index}className="container2">
                  <Link to={item.path}>
                    <img src={item.imageCard} alt="Vantagens" />
                      <p className="title1">{item.titleCards}</p>
                      <p className="subtitle2">{item.subTitleCards}</p>
                  </Link>
                    </div>
              )
          })}
        </div>
        <div className="container3">
        <div className="boxC3">
          <p className="titleC3"> CAIXA D'ÁGUA REVESTIMENTOS </p>
          <p className="textC3">
          Fundada no ano de 1994, a Caixa D'Água Revestimentos LTDA oferece aos clientes mais de 20 anos de experiência no mercado, com profissionais treinados e capacitados para executar serviços especializados. A empresa possui material de tecnologia exclusiva e com registro de patente, que torna seu serviço de revestimento diferenciado e de alta qualidade.
          </p>
          <p className="subTextC3">
          Já pensou qual a importância da água que você consome? Então não deixe para depois o que você consome hoje!
          </p>
          </div>
        </div>
      
      </div> 
    </PageTemplate>
);
}

export default IndexPage;


