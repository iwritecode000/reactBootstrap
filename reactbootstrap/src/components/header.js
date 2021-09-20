import React from "react";
import cover from "../assets/camping.svg"

const Header = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column mx-auto">
                  <h1>
                    Start Your Dream Trip With
                    <storng className="brand-name">Spark Solution</storng>
                  </h1>
                  <h2 className="my-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores.
                  </h2>
                  <div className="mt-3">
                    <a href="/service" className="btn-get-started">
                      Get Started
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 heeader-img">
                    <img src={cover} alt="home image"  className="img-fluid"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
