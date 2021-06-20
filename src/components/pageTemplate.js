import React from 'react';
import "../styles/global.css";
import Header from "./Header/header";
import Footer from "./Footer/footer";
import Navbar from './Navbar/Navbar';


const PageTemplate = (props) => {
  return (
    <div>
      <Header />
      <Navbar />
        {props.children}
      <Footer />
    </div>
  )
}

export default PageTemplate;