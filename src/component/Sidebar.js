import React from "react";

const Sidebar = () => {
  return (
    <div className="elisc_tm_sidebar w-[370px] h-[100vh] fixed left-0 top-0 border-solid border-[rgba(85,82,124,.1)] border-r">
      <div className="sidebar_inner w-full float-left h-auto clear-both text-center">
        <div className="author w-full float-left pt-[60px]">
          <div className="image relative w-[118px] inline-block">
            <img
              className="relative opacity-0 min-w-full"
              src="assets/img/thumbs/1-1.jpg"
              alt=""
            />
            <div
              className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-full"
              data-img-url="assets/img/about/1.jpg"
            ></div>
          </div>
          <div className="name w-full float-left mt-[-19px]">
            <h3>
              <span>
                Zain Ul Ebad<span className="back">Zain Ul Ebad</span>
              </span>
            </h3>
          </div>
        </div>
        <div className="menu scrollable w-full float-left">
          <ul className="transition_link h-full flex items-center justify-center flex-col">
            <li className="active mb-[15px]">
              <a href="#home">Home</a>
            </li>
            <li className="mb-[15px]">
              <a href="#about">About</a>
            </li>
            <li className="mb-[15px]">
              <a href="#service">Services</a>
            </li>
            <li className="mb-[15px]">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="mb-[15px]">
              <a href="#news">Blog</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="copyright absolute bottom-[50px]">
          <div className="social w-full float-left mb-[7px]">
            <ul>
              <li className="mr-[3px] inline-block">
                <a
                  className="w-[40px] h-[40px] inline-block relative rounded-full text-dark-color"
                  href="#/"
                >
                  <i className="icon-facebook-1 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-[16px]"></i>
                </a>
              </li>
              <li className="mr-[3px] inline-block">
                <a
                  className="w-[40px] h-[40px] inline-block relative rounded-full text-dark-color"
                  href="#/"
                >
                  <i className="icon-twitter-1 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-[16px]"></i>
                </a>
              </li>
              <li className="inline-block">
                <a
                  className="w-[40px] h-[40px] inline-block relative rounded-full text-dark-color"
                  href="#/"
                >
                  <i className="icon-linkedin-1 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-[16px]"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="text py-0 px-[50px]">
            <p>Copyright © 2023 Zain Ul Ebad. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
