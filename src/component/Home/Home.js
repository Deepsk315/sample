import React, { Fragment } from "react";
import "./Home.css";

const Home = () => {
  return (
    <Fragment>
      <div className="banner">
        <p>Welcome to DSK store</p>
        <h1>Find Amazing Products in one place!</h1>
        <a href="/Home">
          <button>Scroll</button>
        </a>
      </div>
    </Fragment>
  );
};

export default Home;
