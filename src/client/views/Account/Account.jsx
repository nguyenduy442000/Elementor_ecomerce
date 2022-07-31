import React from "react";
import "./account.scss";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
const Account = () => {
  return (
    <section className="c-account">
      <div className="c-account__container">
        <div className="c-account__heading-title">
          <h1>My account</h1>
        </div>
        <div className="c-account__authentication">
          {/* Login*/}
          <div className="c-account__form">
            <h2 className="c-account-title">Login</h2>
            <label className="c-account-label">
              Username or email address *
            </label>
            <Input type="text" />
            <label className="c-account-label">Password *</label>
            <Input type="text" />
            <Button  name="Log in"/>
            <div className="c-account-remember">
              <Input type="checkbox" />
              <span>Remember me</span>
            </div>
            <span className="c-account-forgot">Lost your password ?</span>
          </div>
          <div className="c-account__form">
            <h2 className="c-account-title">Register</h2>
            <label className="c-account-label">Email address *</label>
            <Input />
            <p className="c-account-remember">
              A password will be sent to your email address
            </p>
            <Button name="Register"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Account;
