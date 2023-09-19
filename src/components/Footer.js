import React from "react";

export default function Footer() {
  return (
    <footer className="footer bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-4 mt-4 col-lg-3 text-center text-sm-start">
            <div className="information">
              <h6 className="footer-heading text-white fw-bold">
                NavExM Community{" "}
              </h6>
              <ul className="list-unstyled footer-link mt-4">
                <li className="mb-1">
                  <a
                    href="#"
                    className="text-white text-decoration-none fw-semibold"
                  >
                    NavExM Webinars
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="#"
                    className="text-white text-decoration-none fw-semibold"
                  >
                    Media library
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="#"
                    className="text-white text-decoration-none fw-semibold"
                  >
                    Airdrop
                  </a>
                </li>
                <li className="">
                  <a
                    href="#"
                    className="text-white text-decoration-none fw-semibold"
                  >
                    Referral
                  </a>
                </li>
                <li className="">
                  <a
                    href="#"
                    className="text-white text-decoration-none fw-semibold"
                  >
                    Press Release
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 mt-4 col-lg-3 text-center text-sm-start">
            <div className="information">
              <h6 className="footer-heading text-white fw-bold">
                Products & Services{" "}
              </h6>
              <ul className="list-unstyled footer-link mt-4">
                <li className="mb-1">
                  <a
                    href="#"
                    className="text-white text-decoration-none fw-semibold"
                  >
                    Staking
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="#"
                    className="text-white text-decoration-none fw-semibold"
                  >
                    Institutional Services
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="#"
                    className="text-white text-decoration-none fw-semibold"
                  >
                    NavExM Academy
                  </a>
                </li>
                <li className="">
                  <a
                    href="#"
                    className="text-white text-decoration-none fw-semibold"
                  >
                    NavExM Labs
                  </a>
                </li>
                <li className="">
                  <a
                    href="#"
                    className="text-white text-decoration-none fw-semibold"
                  >
                    NavExM API
                  </a>
                </li>
                <li className="">
                  <a
                    href="#"
                    className="text-white text-decoration-none fw-semibold"
                  >
                    Proof of Reserves
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 mt-4 col-lg-3 text-center text-sm-start">
            <div className="resources">
              <h6 className="footer-heading text-uppercase text-white fw-bold">
                Support
              </h6>
              <ul className="list-unstyled footer-link mt-4">
                <li className="mb-1">
                  <a
                    href=""
                    className="text-white text-decoration-none fw-semibold"
                  >
                    Trading Rules
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href=""
                    className="text-white text-decoration-none fw-semibold"
                  >
                    Fees & Charges
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href=""
                    className="text-white text-decoration-none fw-semibold"
                  >
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 mt-4 col-lg-2 text-center text-sm-start">
            <div className="social">
              <h6 className="footer-heading text-uppercase text-white fw-bold">
                Social
              </h6>
              <ul className="list-inline my-4">
                <li className="list-inline-item">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Whatsapp"
                  >
                    <i className="bi bi-whatsapp"></i>
                  </button>
                </li>
                <li className="list-inline-item">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Twitter"
                  >
                    <i className="bi bi-twitter"></i>
                  </button>
                </li>
                <li className="list-inline-item">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Instagram"
                  >
                    <i className="bi bi-instagram"></i>
                  </button>
                </li>
                <li className="list-inline-item">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Facebook"
                  >
                    <i className="bi bi-facebook"></i>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="py-2 text-center">
        <p >
        Copyright © 2022 NavExM. All rights reserved.
</p>
        </div>
      </div>
    </footer>
  );
}
