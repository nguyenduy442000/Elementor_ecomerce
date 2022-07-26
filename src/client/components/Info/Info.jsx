import React from "react";
import { FiShield, FiRepeat, FiLifeBuoy, FiTruck } from "react-icons/fi";
import "./info.scss";
const Info = () => {
  return (
    <div className="info">
      <div>
        <div className="info__icon">
          <FiShield />
        </div>
        <h1 className="info--title" >Security</h1>
        <p className="info--description">100% save online payments</p>
      </div>

      <div >
        <div className="info__icon">
          <FiRepeat />
        </div>
        <h1 className="info--title">30 days return period</h1>
        <p className="info--description">Easy returns & refunds</p>
      </div>

      <div>
        <div className="info__icon">
          <FiLifeBuoy />
        </div>
        <h1 className="info--title">Customer support</h1>
        <p className="info--description">We are here 24/7</p>
      </div>

      <div>
        <div className="info__icon">
          <FiTruck />
        </div>
        <h1 className="info--title">Flexible shipping</h1>
        <p className="info--description">Maximum comfort</p>
      </div>
    </div>
  );
};

export default Info;
