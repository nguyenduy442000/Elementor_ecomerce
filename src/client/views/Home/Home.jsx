import React from "react";
import Banner from "../../components/Banner/Banner";
import Bestselles from "../../components/Bestselles/Bestselles";
import Categories from "../../components/Categories/Categories";
import Info from "../../components/Info/Info";
import NewProduct from "../../components/NewProduct/NewProduct";
import Slide from "../../components/slide/Slide";
import Footer from "../layout/Footer/Footer";


import "./Home.scss";
const Home = () => {
  return (
    <div>
   
      <div>
        <Slide />
      </div>
      <div>
        <Banner />
      </div>
      <div className="section">
        <div className="section__newitems">
          <NewProduct />
        </div>
      </div>
      <div className="widgets">
        <div className="widgets__divider">
          <span className="widgets__divider--separator"></span>
        </div>
      </div>

      <div className="section">
        <div className="section__category">
          <Categories />
        </div>
      </div>

      <div className="widgets">
        <div className="widgets__divider">
          <span className="widgets__divider--separator"></span>
        </div>
      </div>

      <div className="section">
      <div className="section__newitems">
        <Bestselles/>
      </div>
    </div>

    <div className="widgets">
    <div className="widgets__divider">
      <span className="widgets__divider--separator"></span>
    </div>
  </div>

  <div className="section">
  <div className="section__category">
   <Info/>
  </div>
</div>


    
    </div>
  );
};

export default Home;
