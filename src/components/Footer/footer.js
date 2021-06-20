import React from 'react';
import './footer.css';
import Instagram from "../../assets/Instagram_new.svg";
import Facebook from "../../assets/Facebook.svg";
import Whatsapp from "../../assets/Whats.svg";


const Footer = () => {
  return (
    <div className="footerContainer">
    <div className="footerWhats">

            {/* <a
              target="_blank"
              href=""
              title="Chama no zap"
              rel="noreferrer"
            > */}
              <img src={Whatsapp} alt="Whatsapp" className="whatsImg"/>
            {/* </a> */}

    </div>
      <div className="visit">
          <span>Visite nossas redes sociais:</span>
      </div>
      <div className="socialMediaFooter">
      <ul>
            <li>
              <a 
                href="https://www.facebook.com/caixadagua"
                target="_blank"
                title="Visite nosso facebook"
                rel="noreferrer"
              >
                <img src={Facebook} alt="Facebook" className="mediaImgFooter"/>
              </a>
            </li>
          
            <li>
            <a
                href="https://www.instagram.com/caixadagua/"
                target="_blank"
                title="Visite nosso Instagram"
                rel="noreferrer"
              >
                <img src={Instagram} alt="Instagram" className="mediaImgFooter"/>
              </a>
            </li>
          </ul>
      </div>
      <span>&copy; 2020 - Caixa D'Água Revestimentos.  Porto Alegre/RS • (51) 3348-1239</span>
      <span>Website by RVD. Contato: renanvz@outlook.com</span>
      
    </div>
  );
}

export default Footer;
