import React from "react";

const Menu = () => {
  return (
    <>
      <div className="main-menu fixed-top main-menu-left">
        <nav className="nav-menu">
          <ul className="menu">
            <li>
              <a href="index-1.html" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
            <li>
              <a href="services.html">Services</a>
            </li>
            <li>
              <a href="works.html">Works</a>
            </li>
            <li>
              <a href="blog.html">Blog</a>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
          </ul>
        </nav>
        <a className="hamburger-menu js-toggle-menu" href="#/">
          <div className="g-lines">
            <span className="line line-dark"></span>
            <span className="line line-dark"></span>
            <span className="line line-dark"></span>
          </div>
        </a>
      </div>
      <div className="main-logo text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6"></div>
            <div className="col-lg-6">
              <a className="logo wow customFadeInUp slow" href="#/">
                E
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
