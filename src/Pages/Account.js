import React from "react";
import AccountImage from "../assets/images/undraw_online_payments_luau 1.svg";

import { Form, Field } from "react-final-form";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "../components/utils";

const Account = () => {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const onSubmit = async (values) => {
    await sleep(300);
    window.alert(JSON.stringify(values, 0, 2));
  };

  return (
    <div className="login-main">
      <div className="login-inside">
        <div className="login-image-div">
          <h2>Get Pro Account</h2>
          <img src={AccountImage} alt="icon" />
        </div>
        <Form
          onSubmit={onSubmit}
          render={({
            handleSubmit,
            reset,
            submitting,
            pristine,
            values,
            active,
          }) => {
            return (
              <form onSubmit={handleSubmit}>
                <div
                  className="input-container email-input"
                  style={{ margin: "20px 0px" }}
                >
                  <Field
                    className="email-focus"
                    style={{ padding: "0px" }}
                    name="number"
                    component="input"
                    type="text"
                    pattern="[\d| ]{16,22}"
                    placeholder="Card Number"
                    format={formatCreditCardNumber}
                  />
                </div>
                <div className="cards-field">
                  <div className="input-container-account card-field-each">
                    <Field
                      style={{ padding: "0px" }}
                      name="expiry"
                      component="input"
                      type="text"
                      pattern="\d\d/\d\d"
                      placeholder="MM/YY"
                      format={formatExpirationDate}
                    />
                  </div>
                  <div className="input-container-account card-field-each">
                    {" "}
                    <Field
                      style={{ padding: "0px" }}
                      name="cvc"
                      component="input"
                      type="text"
                      pattern="\d{3,4}"
                      placeholder="CVC"
                      format={formatCVC}
                    />
                  </div>
                </div>
                <div className="account-what">
                  <p>What’s this?</p>
                </div>
                <div className="input-container" style={{ marginTop: "20px" }}>
                  <input
                    style={{ padding: "0px" }}
                    pattern="[0-9]{5}"
                    placeholder="ZIP/Postal Code"
                  />
                </div>
              </form>
            );
          }}
        />
        <button className="account-btn">Upgrade</button>
      </div>
    </div>
  );
};

export default Account;
