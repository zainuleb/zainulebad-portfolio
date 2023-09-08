import React from "react";

const Mobile = () => {
  return (
    <>
      <div className="elisc_tm_topbar fixed top-0 left-0 right-0 h-[50px] bg-white z-[15] hidden">
        <div className="topbar_inner w-full h-full clear-both flex items-center justify-between py-0 px-[20px]">
          <div className="logo" data-type="image">
            <a className="image" href="#/">
              <img
                className="max-w-[100px] max-h-[40px]"
                src="assets/img/logo/logo.png"
                alt=""
              />
            </a>
            <a className="text" href="#/">
              <span>R.Elisc</span>
            </a>
          </div>
          <div className="trigger">
            <div className="hamburger hamburger--slider">
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="elisc_tm_mobile_menu">
        <div className="inner relative w-full h-full text-right px-[20px] pt-[70px] pb-[20px]">
          <div className="wrapper">
            <div className="avatar w-[70px] h-[70px] relative float-right mb-[50px]">
              <div
                className="image absolute inset-0 bg-no-repeat bg-cover bg-center max-width: 26% max-height: 23%;"
                data-img-url="assets/img/about/1.png"
              ></div>
            </div>
            <div className="menu_list w-full h-auto clear-both float-left mb-[50px]">
              <ul className="transition_link m-0">
                <li className="active mb-[7px]">
                  <a className="text-dark-color" href="#home">
                    Home
                  </a>
                </li>
                <li className="mb-[7px]">
                  <a className="text-dark-color" href="#about">
                    About
                  </a>
                </li>
                <li className="mb-[7px]">
                  <a className="text-dark-color" href="#service">
                    Services
                  </a>
                </li>
                <li className="mb-[7px]">
                  <a className="text-dark-color" href="#portfolio">
                    Portfolio
                  </a>
                </li>
                <li className="mb-[7px]">
                  <a className="text-dark-color" href="#news">
                    Blog
                  </a>
                </li>
                <li className="mb-[7px]">
                  <a className="text-dark-color" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="social w-full float-left mb-[5px]">
              <ul>
                <li className="mr-[8px] inline-block">
                  <a className="text-[#333]" href="#/">
                    <img
                      className="svg"
                      src="assets/img/svg/social/facebook.svg"
                      alt=""
                    />
                  </a>
                </li>
                <li className="mr-[8px] inline-block">
                  <a className="text-[#333]" href="#/">
                    <img
                      className="svg"
                      src="assets/img/svg/social/twitter.svg"
                      alt=""
                    />
                  </a>
                </li>
                <li className="mr-[8px] inline-block">
                  <a className="text-[#333]" href="#/">
                    <img
                      className="svg"
                      src="assets/img/svg/social/instagram.svg"
                      alt=""
                    />
                  </a>
                </li>
                <li className="mr-[8px] inline-block">
                  <a className="text-[#333]" href="#/">
                    <img
                      className="svg"
                      src="assets/img/svg/social/dribbble.svg"
                      alt=""
                    />
                  </a>
                </li>
                <li className="inline-block">
                  <a className="text-[#333]" href="#/">
                    <img
                      className="svg"
                      src="assets/img/svg/social/tik-tok.svg"
                      alt=""
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="copyright w-full float-left">
              <p className="text-dark-color">Copyright &copy; 2023</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mobile;
