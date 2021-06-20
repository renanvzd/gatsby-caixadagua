import React from 'react';
import './header.css';
import Instagram from "../../assets/Instagram_new.svg";
import Facebook from "../../assets/Facebook.svg";
import { Link } from "gatsby";


// export function Header({ action }) {
const Header = () => {
    return (
    <header>
      {/* <div className="action ? activeCor : header"> */}
      <div className="header">
        <div className="title">
        <Link to="/">
          <span>Caixa D'Água Revestimentos</span>
        </Link>
        </div>

        <div className="socialMedia">
        <ul>
            <li>
              <a 
                href="https://www.facebook.com/caixadagua"
                target="_blank"
                title="Visite nosso facebook"
                rel="noreferrer"
              >
                <img src={Facebook} alt="Facebook" className="mediaImg"/>
              </a>
            </li>

            <li>
            <a
                href="https://www.instagram.com/caixadagua/"
                target="_blank"
                title="Visite nosso Instagram"
                rel="noreferrer"
              >
                <img src={Instagram} alt="Instagram" className="mediaImg"/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
