import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Product } from "../../../data";

import Button from "../../components/Button/Button";
import "./productDetail.scss";
const Cart = () => {
  return (
    <section className="c-productDetail">
      <div className="c-productDetail__gallrey">
        <div className="gallrey__img">
          <div className="col-1">
            <img src="https://the7.io/elementor-shop/wp-content/uploads/sites/79/2020/12/es0050-500x666.jpg" alt="" className="col-1__img" />
            <img src="https://the7.io/elementor-shop/wp-content/uploads/sites/79/2020/12/es0051-500x666.jpg" alt="" className="col-1__img" />
          </div>
          <div className="col-2">
            <img src="https://the7.io/elementor-shop/wp-content/uploads/sites/79/2020/12/es0051-500x666.jpg" alt="" className="col-2__img"/>
          </div>
        </div>
        <div className="gallrey__description">
          <h1 className="c-productDetail-headingTitle">Minimalistic lamp</h1>
          <p className="c-productDetail-price">$99.00</p>
          <ul className="c-productDetail__listdesc">
            <li>95% Donec id molestie metus</li>
            <li>No sed eleifend risus</li>
            <li>Natural maecenas tincidunt</li>
            <li>Easy to diam sit amet egestas</li>
          </ul>
          <div className="c-productDetail__color">
            <div className="c-productDetail__btncolor btn-title"><p>Color :</p></div>
            <div className="c-productDetail__btncolor"><p>White</p></div>
            <div className="c-productDetail__btncolor"><p>Black</p></div>
            <div className="c-productDetail__btncolor"><p>Black</p></div>
          </div>
          <div className="c-productDetail__button">
            <div>
            <input type="button" value="-" className="input-btn"/>
            <input type="number" className="input-number" />
            <input type="button" value="+" className="input-btn"/>
            </div>
           <Button name="Add to cart"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
