import React from "react";
import "./styles.css";

export default function Banner() {
  return (
    <div className="py-5 bg-dark text-white">
      <div className="container">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="card bg-dark">
                <div className="card-body">
                  <div className="p-5">
                    <h2>NavExM Giveaways</h2>
                    <p>
                      Perform below simple tasks and earn free $NavC tokens{" "}
                    </p>
                    <ul className="list">
                      <li>Register</li>
                      <li>Retweet/Share with your friends</li>
                      <li>Create a post and tag @NavExM</li>
                      <li>Connect your wallet</li>
                    </ul>
                    <h4>Get $3 worth of #NavCToken for free</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card bg-dark">
                <div className="card-body">
                  <div className="p-5">
                    <h2>NavExM Giveaways</h2>
                    <p>
                      Perform below simple tasks and earn free $NavC tokens{" "}
                    </p>
                    <ul className="list">
                      <li>Register</li>
                      <li>Retweet/Share with your friends</li>
                      <li>Create a post and tag @NavExM</li>
                      <li>Connect your wallet</li>
                    </ul>
                    <h4>Get $3 worth of #NavCToken for free</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card bg-dark">
                <div className="card-body">
                  <div className="p-5">
                    <h2>NavExM Giveaways</h2>
                    <p>
                      Perform below simple tasks and earn free $NavC tokens{" "}
                    </p>
                    <ul className="list">
                      <li>Register</li>
                      <li>Retweet/Share with your friends</li>
                      <li>Create a post and tag @NavExM</li>
                      <li>Connect your wallet</li>
                    </ul>
                    <h4>Get $3 worth of #NavCToken for free</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
