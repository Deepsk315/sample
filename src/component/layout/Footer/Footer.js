import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Body = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download app for Playstore or Appstore</p>
        <img src={playStore} alt="Playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>DSK Store</h1>
        <p>Copyrights 2022 &copy; Deepak SK</p>
      </div>

      <div className="rightFooter">
        <h4>Follow us</h4>
        <a href="#">Instagram</a>
        <a href="#">Facebook</a>
        <a href="#">LikedIn</a>
      </div>
    </footer>
  );
};

export default Body;
