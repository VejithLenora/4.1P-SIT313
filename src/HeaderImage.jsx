import React from "react";
import "./App.css";
import "./normalize.css";
import image1 from "./Images/AdobePublicStock1.jpg";

function HeaderImage(){
    return(
    <div class="container">
       <img src={image1} class="headerimage" alt="AdobePublicStock1" />
    </div>)
  };

  export default HeaderImage;