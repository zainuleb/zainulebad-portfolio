import React from "react";
import backgroundImage from "../assets/img/bg/3.png";

const Home = () => {
  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };
  return (
    <section className="home home-6 d-flex align-items-center" style={divStyle}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6"></div>
          <div className="col-lg-6">
            <div className="home-banner wow customFadeInUp delay-0-2s slow">
              <h6> Hi , There! </h6>
              <h1 className="cd-headline clip">
                I Am
                <span className="cd-words-wrapper base-color">
                  <b className="is-visible"> Elizabeth Elmiz. </b>
                  <b>UX Designer.</b>
                  <b>Photographer.</b>
                </span>
              </h1>
              <p className="max-width-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>

              <ul className="social-icons list-inline">
                <li>
                  <a href="#/">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#/">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#/">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#/">
                    <i className="fab fa-behance"></i>
                  </a>
                </li>
                <li>
                  <a href="#/">
                    <i className="fab fa-dribbble"></i>
                  </a>
                </li>
              </ul>
              <a href="about.html" className="btn-custom">
                More about me
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <div className="row ">
            <div className="col-lg-6"></div>
            <div className="col-lg-6 text-center">
              <span className="wow customFadeInUp delay-0-4s slow">© 2020</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
