import React from "react";
import "./styles.css";

export default function MainSection() {
  return (
    <div className=" text-white bg-dark ">
      <div className="container">
        <div className="p-5">
          <h1>World's Most Rewarding</h1>
          <h1>Crypto Exchange</h1>
          <p>NavExM - World's first revenue generating crypto Exchange.</p>
          <p>It rewards you every time you trade.</p>
          <div className="row justify-content-start my-5">
            <div className="col-4 border_right">
              <h3>Upto 0.10% Cashback*</h3>
              <p>Of transaction value</p>
            </div>
            <div className="col-3">
              <h3>Zero Transaction Fees</h3>
            </div>
          </div>

          <button
            type="button"
            className=" btn btn-warning"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Only for Premium Members"
          >
            Start Trading
          </button>
        </div>
      </div>
    </div>
  );
}
